import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

function TestWords({ auth, words, set }) {
  // start test check end
  const [status, setStatus] = useState("start");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [totalPoitns, setTotalPoints] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answercheck, setAnswecheck] = useState("");
  function calculateTime(numQuestions) {
    const totalSeconds = numQuestions * 5;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes > 0) {
      return `${minutes} minute(s) and ${seconds} second(s)`;
    } else {
      return `${seconds} second(s)`;
    }
  }

  function checkanswer() {
    if (answer === words[questionIdx].word) {
      setStatus("check");
      setAnswer((an) => an + 1);
      setAnswecheck("correct");
    } else {
      setStatus("check");
      setAnswecheck("false");
    }
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
        </div>
      }
    >
      <Head title="Test" />

      {status === "start" && (
        <div className="py-12 flex justify-center">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-white w-10/12  sm:w-1/2">
            <h1 className="mt-4 mb-4">Quize INfo</h1>
            <div className="flex">
              <div className="w-1/2">
                <p>Number of questions:</p>
                <p>Set name:</p>
                <p>Time:</p>
              </div>
              <div className="w-1/2">
                <p>{words.length}</p>
                <p>{set[0].title}</p>
                <p>{calculateTime(words.length)}</p>
              </div>
            </div>
            <button
              onClick={() => setStatus("test")}
              className="w-full bg-orange-600 text-white rounded-xl mt-6"
            >
              Start
            </button>
          </div>
        </div>
      )}
      {status === "test" && (
        <div className="flex flex-col justify-center items-center">
          <div className="py-12  text-white w-10/12  sm:w-1/2 text-center ">
            <h1>{words[questionIdx].translation}</h1>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="w-full mt-10    text-white text-center bg-slate-900 "
            />
            <button
              className="mt-4"
              onClick={() => {
                checkanswer();
              }}
            >
              check answer
            </button>
          </div>
        </div>
      )}
      {status === "check" && <h1 className="text-white">{answercheck}</h1>}
    </AuthenticatedLayout>
  );
}

export default TestWords;
