import React, { useEffect, useState } from 'react'
import QuizHome from '../../../components/QuizHome';


const QuizFront = ({unitTest}) => {

  


// =================================================================

  // for the quiz logic please don't be disturb it 

    // const [quizData, setQuizData] = useState([]);

    const [quizStart, setQuizStart] = useState(false); 

            

            // function get_random (list) {
            //     return list[Math.floor((Math.random()*list.length))];
            //   }

            //   console.log(get_random(unitTest));
    
    const ExtretSubject = [...new Set(unitTest.map((currentUnit) => currentUnit.subject))]
    const ExtretUnit = [...new Set(unitTest.map((Unit) => Unit.unit))]
    
    // console.log(ExtretUnit);
    // console.log(ExtretSubject);






// this is the return mamla ------------------------------

  return (
    <div className="QuizFront flex justify-center items-center  h-[80vh] ">

        {
            quizStart ? "" : 
        

        <div className="quiz_info_box flex flex-col w-[95%] md:w-[60%]  bg-gray-50 p-5 shadow-md">
        <h4 className='text-3xl font-semibold mb-3'>Quiz</h4>
        <p className='text-xl font-medium mb-1'>Subject : {ExtretSubject}</p>
        <p className='text-xl font-medium mb-1'>Category : {ExtretUnit}</p>
        <p className='text-xl font-medium mb-3'>Total Qu. : {unitTest.length}</p>

        <h6 className='text-2xl font-semibold'>Instrunction :</h6>
        <p className='text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatum sed at sit asperiores sapiente ea ratione, voluptate laboriosam, molestiae repudiandae dolorum quis tempore iusto. Iusto optio accusantium ducimus recusandae.</p>
            <div className='flex justify-end mr-5'>

            <button className="show-more bg-[#6366f1] py-1 px-4 text-white mt-5 " onClick={() => setQuizStart(true)} > Start </button>
            </div>

        </div>}

        {
            quizStart ? <QuizHome quizData={unitTest} ExtretSubject={ExtretSubject} currentUnit={ExtretUnit}/>: ""
        }
        

    </div>
  )
};




export async function getServerSideProps({params:{test_start}}) {
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/quiz/start/${test_start}`)
    const unitTest = await res.json();
    // console.log(unitTest);
   

    return {
        props:{
            unitTest
        }
    }
}


export default QuizFront