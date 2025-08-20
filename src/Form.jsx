import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questionsData"; 

export default function Form() {
  const navigate = useNavigate();


  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [questions[current].id]: e.target.value
    });
  };

  const handleNext = () => {
  const currentAnswer = answers[questions[current].id];

  // Validation: block next if empty
  if (!currentAnswer || currentAnswer.trim() === "") {
    setError("⚠️ This question is required.");
    setTimeout(() => setError(""), 3000); 
    return;
  }
  if (current < questions.length - 1) {
    setCurrent(current + 1);
  } else {
    // last question → go to results
    navigate("/results", { state: { answers } });
  }
};


  const handleBackHome = () => {
    navigate("/"); // redirect to homepage
  };

  const q = questions[current];

  return (
    <div className="questionnaire">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={handleBackHome} className="text-blue-500">Back</button>
        <span>{current + 1}/{questions.length}</span>
        {/* Next / Submit button */}
      <button
        onClick={handleNext}
        className="text-blue-500"
        >
        {current === questions.length - 1 ? "Submit" : "Next"}
      </button>
        
        </div>
      

      {/* Question */}
      <h3 className="text-xl font-semibold">{q.title}</h3>
      <p className="mb-4">{q.desc}</p>

      {q.type === "text" && (
  <>
    <textarea
      placeholder={q.placeholder}
      value={answers[q.id] || ""}
      onChange={handleChange}
      className="border p-2 w-full"
    />
    {error && <p style={{ color: "red" }}>{error}</p>}
  </>
)}

{q.type === "select" && (
  <>
    <select
      value={answers[q.id] || ""}
      onChange={handleChange}
      className="border p-2 w-full"
    >
      <option value="">Select one</option>
      {q.options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
    {error && <p style={{ color: "red"}}>{error}</p>}
  </>
)}
     
    </div>
  );
}
