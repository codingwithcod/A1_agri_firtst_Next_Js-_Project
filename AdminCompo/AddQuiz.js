import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddQuiz = ({quiz}) => {

    

  const [AddQuizCompo, setAddQuizCompo] = useState(false);

  const [quizData, setQuizData] = useState({});

  const handleChange = (e) => {
    setQuizData({ ...quizData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(quizData);

    const res = await fetch(`http://localhost:3000/api/admin/quiz`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quizData),
    });

    const response = await res.json();
    if (response.success) {
      toast.success(response.success, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setQuizData({});
    } else {
      toast.error(response.error, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="add-quiz">
    <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      <div>
        <div className="flex  items-center justify-center h-10  ">
          <h3 className="text-3xl py-3 mt-5 font-semibold">All Quiz</h3>
        </div>
        <div className="flex  items-center justify-end px-2">
          <button
            onClick={() => setAddQuizCompo((prev) => !prev)}
            className="text-end  bg-[#6366f1] py-1 px-4 text-white mt-4"
          >
            {!AddQuizCompo ? "Add Quiz" : "Show Quiz"}
          </button>
        </div>
      </div>
      {AddQuizCompo ? (
        <div className="quizCard border-2 p-4 m-2">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border  border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="subject"
                  value={quizData.subject || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Unit
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="unit"
                  value={quizData.unit || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Unit Id
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="unitId"
                  value={quizData.unitId || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Question
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="question"
                  value={quizData.question || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Option : A
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="optionA"
                  value={quizData.optionA || ""}
                />
              </div>

              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Option : B
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="optionB"
                  value={quizData.optionB || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Option : C
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="optionC"
                  value={quizData.optionC || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Option : D
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="optionD"
                  value={quizData.optionD || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Answer
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="answer"
                  value={quizData.answer || ""}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="  show-more bg-[#6366f1] py-2 px-4 text-white  mt-5 "
              >
                Add to All Quiz
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="quizCard border-2 p-2 m-2">
        {
          quiz.map((curQuiz) => {

            const {subject, unit, question, optionA, optionB , optionC, optionD, answer} = curQuiz;

            return(
              <div className="flex flex-col m-2 p-2 border border-[#6366f1] rounded-md">
              <div className="flex border-x-2 border-[#6366f1] ">
              <h3 className="font-medium text-xl px-2 ">Subject: {subject}</h3>
              <h3 className="font-medium text-xl ml-5">Unit: {unit}</h3>
              </div>
            <h4 className="text-xl font-semibold">
            {question}
            </h4>
            <span className="text-md">A : {optionA}</span>
            <span className="text-md">B : {optionB}</span>
            <span className="text-md">C : {optionC}</span>
            <span className="text-md">D : {optionD}</span>
            <span className="text-md font-semibold">Ans : {answer}</span>
          </div>
            )
          })
        }
          
          
        </div>
      )}
    </div>
  );
};

export default AddQuiz;
