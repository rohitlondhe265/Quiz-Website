import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage.jsx";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "bg-green-400 text-white shadow-lg p-2";
    else if (selected === i && selected !== correct) return "bg-red-400 text-white shadow-lg p-2";
    else if (i === correct) return "bg-green-400 text-white shadow-lg p-2";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1>Question {currQues + 1} :</h1>

      <div className="w-full lg:w-11/12 flex flex-col items-center justify-center rounded-md border-gray-600 border-2 px-3 py-3 my-1 lg:my-3">
        <h2>{questions[currQues].question}</h2>
        <div className="flex flex-wrap items-center justify-around gap-3 my-6">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`border rounded-lg py-2 px-6 ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="flex w-full justify-around">
          <button className="btn btn-accent" onClick={() => handleQuit()}>Quit
          </button>
          <button className="btn btn-neutral" onClick={handleNext}>{currQues > 20 ? "Submit" : "Next Question"}</button>
        </div>
      </div>
    </div>
  );
};

export default Question;
