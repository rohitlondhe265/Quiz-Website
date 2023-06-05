import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, history]);

  return (
    <div className="flex flex-col justify-center h-96 border">
      <span className="text-center text-6xl">Final Score : {score}</span>
      <button onClick={()=> navigate("/")} className="btn btn-sm btn-secondary self-center mt-12">Go to homepage</button>
    </div>
  );
};

export default Result;
