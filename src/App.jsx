import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import axios from "axios";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz.jsx"
import Result from "./pages/Result.jsx"
import DarkToggle from "./components/DarkToggle.jsx"
import { useState } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

function App() {

  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions} />
        },
        {
          path: "/quiz",
          element: <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions} />
        },
        {
          path: "/result",
          element: <Result
            name={name} score={score} />
        }
      ]
    }
  ]);

  return (
    <div data-theme={mode}>
      <div className="px-6 container mx-auto" >
        <div className="absolute right-1 top-1 lg:right-36 lg:top-3">
          <DarkToggle toggle={toggle} mode={mode}/>
        </div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;