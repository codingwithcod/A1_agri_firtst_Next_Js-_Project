import React, { useEffect, useState } from "react";
import QuizResult from "./QuizResult";
import { useRef } from "react";

const QuizHome = ({quizData, ExtretSubject, currentUnit}) => {


//  const user = useSelector((state)=>state.authReducer.authData);

//  console.log(ExtretSubject.toString());

  // --------------- for getting all quiz  ----------------------


const Questions = quizData;





  // ---------------------------------------------------
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [quizEnds, setQuizEnds] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState();
  const [skipAnswer, setSkipAnswer] = useState(0);
  const [optionClass, setOptionClass] = useState("option");



  
  const [userScore, setUserScore] = useState({
    user_id:"",
    subject:"",
    unit:"",
    totalQues:"",
    correct: "",
    wrong: "",
    notAttempet: "",
    percentage:"",
  
});






const CollectScore = () => {
  setUserScore({
          // user_id:user._id,
          subject:ExtretSubject.toString(),
          unit:currentUnit,
          totalQues:QuizLength,
          correct: correctAnswer,
          wrong:wrongAnswer,
          notAttempet: skipAnswer,
          percentage:Percentage,
      
        })
};


useEffect(() => {
  if(quizEnds == true){
    CollectScore();
  }
}, [quizEnds]);


console.log(userScore);












// ========================================================================

  const Ques = Questions[currentQuestionIndex].question;
  const OptionA = Questions[currentQuestionIndex].optionA;
  const OptionB = Questions[currentQuestionIndex].optionB;
  const OptionC = Questions[currentQuestionIndex].optionC;
  const OptionD = Questions[currentQuestionIndex].optionD;
  const Answer = Questions[currentQuestionIndex].answer;

  const QuizLength = Questions.length;

  // --------------- Answer Select handleSubmit --------- 

  const handleSubmit = (e) => {
    const SAnswer = e.target.innerHTML;
    setSelectAnswer(SAnswer);
    // console.log("answer " + Answer);
    // console.log("I am in the handleSubmit ");

    if(SAnswer === OptionA){
        setOptionClass("divA")
    }
    else if(SAnswer === OptionB){
        setOptionClass("divB")
    }
    else if(SAnswer === OptionC){
        setOptionClass("divC")
    }
    else if(SAnswer === OptionD){
        setOptionClass("divD")
    }

  };


  
  // ------------  next button -----------------------

  const handleNext = () => {
    if (selectAnswer === Answer) {
      setCorrectAnswer(correctAnswer + 1);
    } else if (selectAnswer === undefined) {
      setSkipAnswer(skipAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }

    if (QuizLength > currentQuestionIndex + 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizEnds(true);
    }

    setSelectAnswer();
    setOptionClass("option")
  };

  const Percentage = Math.round((correctAnswer / QuizLength) * 100);


// ================       for the Score of user Handle   ====================





const optionBox = "p-1 pl-5 w-[100%] md:w-[90%] bg-white text-lg rounded-md "
const optionSelect = "p-1 pl-5 w-[100%] md:w-[90%] bg-indigo-500 text-white text-lg rounded-md "




  return (
    <div className="QuizHome flex justify-center w-[95%] bg-indigo-50 shadow-md rounded-md md:w-[60%]">
      

      {!quizEnds ? (
        <div className="quiz_box  p-5 flex flex-col gap-y-3 w-[90%]">
          <h4 className="text-2xl font-medium">
            Q <span >{currentQuestionIndex + 1}</span> {Ques}
          </h4>
          <div className={optionClass === "divA" ? `${optionSelect}`: `${optionBox}`} 
          onClick={handleSubmit}>
            {OptionA}
          </div>
          <div className={optionClass === "divB" ? `${optionSelect}`: `${optionBox}`} 
          onClick={handleSubmit}>
            {OptionB}
          </div>
          <div className={optionClass === "divC" ? `${optionSelect}`: `${optionBox}`}
           onClick={handleSubmit}>
            {OptionC}
          </div>
          <div className={optionClass === "divD" ? `${optionSelect}`: `${optionBox}`}
           onClick={handleSubmit}>
            {OptionD}
          </div>

          <div className="next_btn">
            <button onClick={handleNext} className="show-more bg-[#6366f1] py-1 px-4 text-white mt-5 ">
              Next
            </button>
          </div>
        </div>
      ) : (
        <QuizResult key={userScore} userScore={userScore}/>
        )}
    </div>
  );
};

export default QuizHome;

