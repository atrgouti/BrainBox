import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

function TestQuizzes({ auth, quizzes, quizzName }) {
  // start test check end
  const [status, setStatus] = useState("start");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [totalPoitns, setTotalPoints] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answercheck, setAnswecheck] = useState("");

  //result of my answer
  const [result, setResult] = useState("");

  //show correct word
  const [showCorrectWord, setShowCorrectWord] = useState(false);

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
    console.log("answer", answer, "antwort", quizzes[questionIdx].word);
    if (answer === quizzes[questionIdx].word) {
      setStatus("check");
      setTotalPoints((an) => an + 1);
      setAnswecheck("correct");
    } else {
      setStatus("check");
      setAnswecheck("false");
    }
  }

  // show failure

  const checkWord = () => {
    let resultHtml = "";
    // for (let i = 0; i < answer.length; i++) {
    //   if (
    //     i < quizzes[questionIdx].word.length &&
    //     answer[i] === quizzes[questionIdx].word[i]
    //   ) {
    //     resultHtml += `<span style="color: green;">${answer[i]}</span>`;
    //   } else {
    //     resultHtml += `<span style="color: red;">${answer[i]}</span>`;
    //   }
    // }

    // // Handle extra characters in input longer than correctWord
    // if (answer.length > quizzes[questionIdx].word.length) {
    //   for (let i = quizzes[questionIdx].word.length; i < answer.length; i++) {
    //     resultHtml += `<span style="color: red;">${answer[i]}</span>`;
    //   }
    // }
    for (let i = 0; i < answer.length; i++) {
      if (i < answer.length && answer[i] === quizzes[questionIdx].word[i]) {
        resultHtml += `<span style="color: green; background-color: white; padding: 0 5px;">${answer[i]}</span>`;
      } else if (i < answer.length) {
        resultHtml += `<span style="color: red; background-color: white; padding: 0 5px;">${answer[i]}</span>`;
        setShowCorrectWord(true);
      } else {
        resultHtml += `<span style="background-color: white; padding: 0 5px;">&nbsp;</span>`;
      }
    }

    setResult(resultHtml);
  };

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
                <p>{quizzes.length}</p>
                <p>{quizzName[0].title}</p>
                <p>{calculateTime(quizzes.length)}</p>
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
          <div className="py-12  text-white w-10/12  sm:w-1/2 text-center relative">
            <p className="absolute right-2 top-12">
              {questionIdx + 1}/{quizzes.length}
            </p>

            <h1>{quizzes[questionIdx].translation}</h1>
            <input
              required
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="w-full mt-10    text-white text-center bg-slate-900 "
            />
            <button
              className="mt-4"
              onClick={() => {
                if (answer !== "") {
                  checkanswer();
                  checkWord();
                } else {
                  alert("please answer the question!");
                }
              }}
            >
              check answer
            </button>
          </div>
        </div>
      )}
      {status === "check" && (
        <div className="flex flex-col justify-center items-center">
          <div className="py-12  text-white w-10/12  sm:w-1/2 text-center relative">
            <p className="absolute right-2 top-12">
              {questionIdx + 1}/{quizzes.length}
            </p>
            <h1>{quizzes[questionIdx].translation}</h1>
            <input
              required
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="text"
              className="w-full mt-10    text-white text-center bg-slate-900 "
              disabled
            />
            <h1
              className={`${
                answercheck === "correct" ? "text-green-400" : "text-red-500"
              } mt-5 uppercase`}
            >
              {answercheck}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: result }} />
            {showCorrectWord && (
              <p>The Correct Answer: {quizzes[questionIdx].word}</p>
            )}
            {questionIdx === quizzes.length - 1 ? (
              <button
                className="mt-4 bg-white border-zinc-100 text-black py-2 px-6"
                onClick={() => setStatus("finish")}
              >
                Finish
              </button>
            ) : (
              <button
                className="mt-4 bg-white border-zinc-100 text-black py-2 px-6    "
                onClick={() => {
                  if (answer !== "") {
                    setQuestionIdx((curr) => curr + 1);
                    setStatus("test");
                    setAnswer("");
                  } else {
                    alert("please answer!");
                  }
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
      {status === "finish" && (
        <div className="flex flex-col justify-center items-center">
          <div className="py-12  text-white w-10/12  sm:w-1/2 text-center relative flex-col flex">
            <h1>
              you scored {totalPoitns} / {quizzes.length}
            </h1>
            <button
              onClick={() => {
                setStatus("start");
                setQuestionIdx(0);
                setTotalPoints(0);
                setAnswer("");
                setAnswecheck("");
              }}
              className="mt-4 bg-white border-zinc-100 text-black py-2 px-6"
            >
              RESET
            </button>
            <Link
              href={route("sets.index")}
              className="mt-4 bg-white border-zinc-100 text-black py-2 px-6"
            >
              Go to sets
            </Link>
          </div>
        </div>
      )}
    </AuthenticatedLayout>
  );
}

export default TestQuizzes;
