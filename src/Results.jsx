import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "./questionsData";
import { useState, useEffect } from "react"; 
export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const prepareDataForAPI = () => {
  // Convert answers to a readable text format
  let userProfile = "User Profile for Career Recommendation:\n\n";
  
  questions.forEach((question) => {
    const answer = answers[question.id] || "Not answered";
    userProfile += `${question.title}: ${answer}\n`;
  });
  
  userProfile += "\nBased on this profile, recommend the 5 most suitable career paths.";
  
  return userProfile;
};

  const handleBackHome = () => {
    navigate("/");
  };

  const handleRetakeQuiz = () => {
    navigate("/form");
  };

  return (
    <div className="results-container">

    <div className="top-section">
            <button onClick={handleBackHome} className="btn-home">Back to Home</button>
        <h2>Your Career Assessment Results</h2>
            
      </div>

      
      <div className="answers-display">
        {questions.map((question) => (
          <div key={question.id} className="answer-item">
            <h4>{question.title}</h4>
            <p className="user-answer">
              <strong>Your Answer:</strong> {answers[question.id] || "No answer provided"}
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleRetakeQuiz} className="btn-retake">Retake Quiz</button>

      
    </div>
  );
}
