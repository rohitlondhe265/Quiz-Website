import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Categories from "../Data/Categories.js";
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="flex justify-around items-center w-full">
      <div className="flex flex-col w-1/2 items-center font-bold">
        <span style={{ fontSize: 30 }}>Quiz Setup</span>
        <div className="flex flex-col w-full space-y-6 my-6 justify-center items-center">
          {error && <ErrorMessage>Please Fill all the feields</ErrorMessage>}

          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" className="input input-bordered input-primary w-full" />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="select select-primary w-full">
            <option hidden>Select the Category</option>
            {Categories.map((cat) => (
              <option key={cat.category} value={cat.value}>
                {cat.category}
              </option>
            ))}
          </select>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="select select-primary w-full">
          <option hidden>Select the Difficulty</option>
            <option key="Easy" value="easy">Easy</option>
            <option key="Medium" value="medium">Medium</option>
            <option key="Hard" value="hard">Hard</option>
          </select>
          <button onClick={handleSubmit} className="btn w-full btn-accent">Start Quiz</button>
        </div>
      </div>
      <div className="w-1/2"><img src="/quiz.png" className="w-3/4 mx-auto" alt="quiz app" /></div>
    </div>
  );
};

export default Home;
