import React from 'react';
import { useRouter } from "next/router";



const Profile = () => {

  const router = useRouter()


  return (
   <div className="profile">
    <div className="main_container flex flex-col justify-start sm:m-5 m-1  bg-gray-50 rounded-md">
      <div className="flex  p-2 w-[100%] items-center bg-gray-100 ">
        <img className='w-24' src="/profilePic.svg" alt="profileImg" />
        <span className='ml-8 text-3xl sm:text-6xl font-semibold'>Abhi Patel</span>
      </div>

      <div className="info p-2 ">
        <div>
          <span>Email :</span>
          <span> abhi@gmail.com</span>
        </div>
        <div>
          <span>Member :</span>
          <span> No</span>
        </div>
        <div onClick={() => {localStorage.removeItem('A1NextProfile'); router.push('/')}}
         className="show-more flex justify-center items-center w-20 bg-[#6366f1] py-1 px-3  text-white mt-5 cursor-pointer">
          Logout?
        </div>

      </div>
      <div className="topAnalisys p-2 flex flex-col  items-center">
      <h4 className='text-center text-3xl font-semibold'>Test Analysis</h4>
       

        <div className="progerss w-[90%] sm:w-[70%] md:w-[50%]">
              <span className="mb-1 text-base font-medium text-gray-600">Last Test - 70%</span>
                <div className="w-full bg-gray-200  h-3.5 mb-4  ">
                  <div className=" h-3.5 bg-green-500 0 w-[70%]" ></div>
                </div>
                

                <div className="mb-1 text-base font-medium  text-gray-600">All Over</div>
                <div className="w-full bg-gray-200  h-3.5 mb-4 ">
                  <div className="bg-[#6366f1] h-3.5 w-[60%] "></div>
                </div>

                <div className="mb-1 text-base font-medium  text-gray-600">Average Student</div>
                <div className="w-full bg-gray-200  h-3.5 mb-4 ">
                  <div className="bg-red-600 h-3.5  dark:bg-red-500 w-[40%]"></div>
                </div>
        </div>

        <button className="show-more bg-[#6366f1] py-2 px-4 text-white mt-5 cursor-pointer">
          Show Full Analytics 
        </button>

      </div>
    </div>
   </div>
  )
}

export default Profile