import { useEffect, useState } from "react";
import Question from "../components/Question.jsx";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-lg lg:text-xl border shadow-xl p-2 rounded-md lg:p-3">Welcome, {name}</span>
      {questions ? (
        <>
          <div className="w-full flex justify-between uppercase m-3">
            <span>{questions[currQues].category}</span>
            <span>
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <span className="loading loading-spinner text-primary"></span>
      )}
    </div>
  );
};

export default Quiz;
