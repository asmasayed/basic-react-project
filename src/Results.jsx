import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "./questionsData";
import { getCareerRecommendations } from "./ai"; // Import the new AI function

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the answers data passed from Form component
  const answers = location.state?.answers || {};
  
  const [jobRecommendations, setJobRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAnswers, setShowAnswers] = useState(true); // Toggle between answers and recommendations

  // Function to get career recommendations
  const getJobRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getCareerRecommendations(answers);
      console.log('AI Response:', response);
      
      // Parse the response to extract job titles
      const jobList = parseJobRecommendations(response);
      setJobRecommendations(jobList);
      
    } catch (err) {
      console.error('AI Error:', err);
      setError('Failed to get recommendations');
      // Fallback recommendations
      setJobRecommendations(['Software Engineer', 'Data Scientist', 'UX Designer', 'Product Manager', 'DevOps Engineer']);
    } finally {
      setIsLoading(false);
    }
  };

  // Parse the AI response to extract clean job titles
  const parseJobRecommendations = (response) => {
    const lines = response.split('\n').filter(line => line.trim());
    const jobs = lines
      .filter(line => /^\d+\./.test(line.trim())) // Lines starting with numbers
      .map(line => line.replace(/^\d+\.\s*/, '').trim()) // Remove numbers and dots
      .slice(0, 5); // Take only first 5
    
    return jobs.length === 5 ? jobs : ['Software Engineer', 'Data Scientist', 'UX Designer', 'Product Manager', 'DevOps Engineer'];
  };

  useEffect(() => {
    if (Object.keys(answers).length > 0 && jobRecommendations.length === 0) {
      getJobRecommendations();
    }
  }, [answers]);

  const handleBackHome = () => {
    navigate("/");
  };

  const handleRetakeQuiz = () => {
    navigate("/form");
  };

  return (
    <div className="results-container">
      <h2>Your Career Assessment Results</h2>
      
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button 
          className={showAnswers ? 'active' : ''} 
          onClick={() => setShowAnswers(true)}
        >
          Your Answers
        </button>
        <button 
          className={!showAnswers ? 'active' : ''} 
          onClick={() => setShowAnswers(false)}
        >
          AI Recommendations {isLoading ? '(Loading...)' : ''}
        </button>
      </div>

      {showAnswers ? (
        // Show user answers
        <div className="answers-display">
          {questions.map((question) => (
            <div key={question.id} className="answer-item">
              <h4>{question.title}</h4>
              <p className="question-desc">{question.desc}</p>
              <p className="user-answer">
                <strong>Your Answer:</strong> {answers[question.id] || "No answer provided"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Show AI recommendations
        <div className="recommendations-display">
          {isLoading ? (
            <div className="loading">Getting your personalized recommendations...</div>
          ) : error ? (
            <div className="error">Failed to get recommendations. Showing fallback options.</div>
          ) : (
            <div className="job-recommendations">
              <h3>Your Top 5 Career Matches</h3>
              {jobRecommendations.map((job, index) => (
                <div key={index} className="job-card">
                  <span className="job-number">{index + 1}</span>
                  <span className="job-title">{job}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="action-buttons">
        <button onClick={handleBackHome} className="btn-home">Back to Home</button>
        <button onClick={handleRetakeQuiz} className="btn-retake">Retake Quiz</button>
      </div>
    </div>
  );
}
