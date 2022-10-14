import Link from 'next/link';
import React, { useEffect, useLayoutEffect } from 'react';
import { useMemo } from 'react';

const QuizResult = ({userScore}) => {
  
  
  
  
//   const dispatch = useDispatch();
  
//   // const { user_id, ...other} = userScore;
  
//   // useMemo(() => {

//     const updateHandle = async()=> {
//       console.log("am in the function");
//       const score = await userScore;
//       const {user_id, ...other} = score;

//       if(user_id){
//         dispatch(uploadScore(user_id, other))
//         console.log(other);
//       }
//       else{
//         console.log("no user id found");
//       }
//     }
// console.log( "i am at the Call up"); 
//     updateHandle()
    
//   // }, []);
  
//   // console.log(other);
//   // console.log("i am : 6");
  
















  return (
    <div className="result_box flex flex-col  w-[100%] bg-gray-50 shadow-md p-5">
          <h6 className='text-3xl font-semibold mb-3'>Result</h6>
          <div className=" flex gap-5">
            <div>
              <p>Total</p>
              <p>Correct</p>
              <p>Wrong</p>
              <p>Not Attempt</p>
              <p>Percentage</p>
            </div>
            <div>
              <p>: {userScore.totalQues}</p>
              <p>: {userScore.correct}</p>
              <p>: {userScore.wrong}</p>
              <p>: {userScore.notAttempet}</p>
              <p>: {userScore.percentage} %</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mr-5 gap-5">
            <button className="show-more bg-[#6366f1] py-1 px-4 text-white mt-5 " onClick={() => window.location.reload()}>
              Retry
            </button>
            <Link  href='/quiz'><button  className="show-more bg-[#6366f1] py-1 px-4 text-white mt-5 "> Home</button></Link>
          </div>
        </div>
      
  )
}

export default QuizResult;