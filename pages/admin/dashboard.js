import React, { useEffect, useState } from 'react'
import AddQuiz from '../../AdminCompo/AddQuiz'
import AddPost from '../../AdminCompo/AddPost'
import AddUser from '../../AdminCompo/AddUser'
import AddBook from '../../AdminCompo/AddBook'
import Analytics from '../../AdminCompo/Analytics'
import { useRouter } from 'next/router';





const Dashboard = ({books, quiz, post}) => {

 

  const router = useRouter();


  const [toggelPage, setToggelPage] = useState('AddQuiz');


  useEffect(() => {
    if(localStorage.getItem('A1NextAProfile')){

    }else{
      router.push("/")
    }
}, []);


  return (
    <div className="dashboard  h-[100vh] flex flex-col">
    <div className="dashboard  h-[90vh] flex">
      <div className="left-side-navigation bg-gay-200 h-[90vh] w-[15rem] sticky left-0 bg-[#6366f1]">
        <div className='text-center p-2 text-3xl font-semibold  border-[#6366f1]'>
          <h3 className='text-white'>DashBoard </h3>
        </div>
        <div className="flex flex-col items-start  pl-4 space-y-3 text-xl  ">
          <span 
          onClick={()=> setToggelPage('AddQuiz')}
           className={` ${toggelPage=='AddQuiz' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Add Quiz</span>
          <span
          onClick={()=> setToggelPage('AddPost')}
           className={` ${toggelPage=='AddPost' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Add Post</span>
          <span 
          onClick={()=> setToggelPage('AddBooks')}
           className={` ${toggelPage=='AddBooks' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Add Books</span>
          <span 
          onClick={()=> setToggelPage('AddUser')}
           className={` ${toggelPage=='AddUser' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Add User</span>


          <span 
          onClick={()=> setToggelPage('AddPhotos')}
           className={` ${toggelPage=='AddPhotos' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Add Photos</span>
          <span 
          onClick={()=> setToggelPage('Analytics')}
           className={` ${toggelPage=='Analytics' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Analytics</span>
          <span 
          onClick={()=> setToggelPage('TestScore')}
           className={` ${toggelPage=='TestScore' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Test Score</span>
          <span 
          onClick={()=> setToggelPage('PostReview')}
           className={` ${toggelPage=='PostReview' ? "text-[#6366f1] font-medium rounded-l-full rounded-r-lg bg-white" : "text-white"}    w-[100%] pl-2 cursor-pointer`}>Post Review</span>




        </div>
      </div>
      <div className="right-big  h-[90vh] w-full overflow-auto  scroll-smooth flex flex-col">

      {
        (toggelPage=='AddQuiz') ?  <AddQuiz quiz={quiz}/> : ""
      }
      {
        (toggelPage=='AddPost') ?  <AddPost post={post}/> : ""
      }
      {
        (toggelPage=='AddBooks') ?  <AddBook books={books} /> : ""
      }
      {
        (toggelPage=='AddUser') ?  <AddUser/> : ""
      }
      {
        (toggelPage=='Analytics') ?  <Analytics/> : ""
      }
      {
        (toggelPage=='AddPhotos') ?  <Analytics/> : ""
      }
      {
        (toggelPage=='TestScore') ?  <Analytics/> : ""
      }
      {
        (toggelPage=='PostReview') ?  <Analytics/> : ""
      }
      
      </div>

    </div>

      
      
     
      <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 A1Agriculture —
        <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@ABHiPATEL</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>

  
    </div> 
  )
}


 // for the books
export async function getServerSideProps() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books/`)
    const books = await res.json()
    const resQuiz = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/quiz/`)
    const quiz = await resQuiz.json()
    const resPost = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post/`)
    const post = await resPost.json()
  
    return {
      props: {
        books,
        quiz,
        post
      }
    }

  

  }

  // for the quiz




export default Dashboard;