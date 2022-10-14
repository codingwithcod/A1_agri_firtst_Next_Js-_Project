import React, { useEffect, useState } from 'react';
import SubjectCardQuizPage from '../../components/SubjectCardQuizPage';


const Quiz = ({quiz}) => {


  
    
   
    const AllSubjects = [...new Set(quiz.map((curentSub) => { return curentSub.subject}))]

    // console.log(AllSubjects);

    
  return (
      <>
        <div className="Quiz min-h-[70vh]">
    <div className="text-center text-3xl text-indigo-500 mt-3 font-semibold  ">
        <h3>Free Quiz for All</h3>
    </div>
    <div className="main_section flex flex-col items-center">
    {
        AllSubjects.map((CurrentSub, id) => {
            return <SubjectCardQuizPage  
              CurrentSub={CurrentSub}  key={id} ></SubjectCardQuizPage>
        })
    }
    

    </div>

    </div>
    </>
  )
}


export async function getServerSideProps() {
    

  const resQuiz = await fetch(`${process.env.BASE_URL}/api/admin/quiz/`)
    const quiz = await resQuiz.json()
  

  return {
      props:{
        quiz
      }
  }
}





export default Quiz;