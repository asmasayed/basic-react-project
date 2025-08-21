
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { questions } from "./questionsData";
import { getCareerRecommendations } from "./ai";  //Import the new AI function

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  
   //Get the answers data passed from Form component
  const answers = location.state?.answers || {};
  
  const [jobRecommendations, setJobRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

   //Function to get career recommendations
  const getJobRecommendations = async () => {
    if (isLoading) return; // Prevent double-calls
    
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
      .map(line => line.replace(/^\d+\.\s*/, '').trim())//  Remove numbers and dots
      .slice(0, 3); // Take first 3 jobs
    
    return jobs.length >= 3 ? jobs : ['Software Engineer', 'Data Scientist', 'UX Designer', 'Product Manager', 'DevOps Engineer'];
  };

  // Function to handle showing career recommendations
  const handleViewCareer = () => {
    setShowRecommendations(true);
    if (jobRecommendations.length === 0) {
      getJobRecommendations();
    }
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const handleRetakeQuiz = () => {
    navigate("/form");
  };

     return (
   <div className="results-container">
    
    
     {!showRecommendations ? (
       <>
         <h2>Thank you! Your Form was submitted.<br/>You've just taken the first step toward building your future career!</h2>
         <p>Your personalized career suggestions are ready. Click the button below to explore opportunities that match your skills and interests.</p>
         <button 
           className='btn-career'
           onClick={handleViewCareer}
         >
           View Results 
         </button>
       </>
     ) : (
       <div className="recommendations-display">
         {isLoading ? (
           <div className="loading">Getting your personalized recommendations...</div>
         ) : error ? (
           <div className="error">Failed to get recommendations. Showing fallback options.</div>
         ) : (
           <div className="job-recommendations">
             <button onClick={handleBackHome} className="btn-home">Back to Home</button>
             <h3>Your Top 3 Career Matches:</h3>
             <p>Based on your skills, interests, and work style, here are some career paths that could be a great fit for you. Each card gives you a quick overview and resources to get started.</p>
             <div className="job-cards-container">
               {jobRecommendations.map((job, index) => (
               <div key={index} className="job-card">
                 <span className="job-number">{index + 1}</span>
                 <span className="job-title">{job}</span> 
               </div>
             ))}
             </div>
             <div className="action-buttons">
       <button onClick={handleRetakeQuiz} className="btn-retake">Retake Quiz</button>
     </div>
           </div>
         )}
       </div>
     )}
   </div>
 );
}
