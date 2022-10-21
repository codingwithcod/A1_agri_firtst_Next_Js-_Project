import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddQuizCompo from "./AddQuizCompo";




const AddQuiz = ({quiz}) => {

    

  const [isAddQuizCompo, setIsAddQuizCompo] = useState(false);
  const [quizForEdit, setQuizForEdit] = useState(null)
  const [isEdit, setIsEdit] = useState(false);



  const handleQuizEdit = (curQuiz) => {
    setIsAddQuizCompo(true)
    setQuizForEdit(curQuiz)
  }

  const handleDeleteQuiz = async(id) => {

    const conf =  window.confirm("Do you really want to Delete Quiz ?")

    if(conf){
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/quiz`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
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
    }
    

  }

  const ResetForm = () => {
    console.log("reset Run........");
    setQuizForEdit()
  }


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
            onClick={() => {ResetForm(), setIsEdit(false), setIsAddQuizCompo((prev) => !prev)}}
            className="text-end  bg-[#6366f1] py-1 px-4 text-white mt-4"
          >
            {!isAddQuizCompo ? "Add Quiz" : "Show Quiz"}
          </button>
        </div>
      </div>
      {isAddQuizCompo ? (
        <AddQuizCompo quizForEdit={quizForEdit} isEdit={isEdit}/>
      ) : (
        <div className="quizCard  p-2 m-2 ">
        {
          quiz.map((curQuiz, ind) => {

            const {_id, subject, unit, question, optionA, optionB , optionC, optionD, answer} = curQuiz;

            return(
              <div key={ind} className="flex flex-col m-2 my-4 p-2  border border-indigo-400  shadow-md hover:bg-gray-50 ease-out duration-300">
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
            <div className="mt-2">
                  <button 
                  onClick={()=> {handleQuizEdit(curQuiz), setIsEdit(true)}}
                  className=" ml-4 inline-flex text-white bg-indigo-500 border-0  px-3 focus:outline-none hover:bg-indigo-700  text-lg">
                   Edit
                  </button>
                  <button
                  onClick={()=> handleDeleteQuiz(_id)} 
                  className=" ml-4  text-white bg-red-600  border-0  px-3 focus:outline-none hover:bg-black  text-lg">
                   Delete
                 </button>
            </div>
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
