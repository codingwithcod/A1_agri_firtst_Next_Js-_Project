import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import AddBookCompo from "./AddBookCompo";
import AddPostCompo from "./AddPostCompo";




const AddPost = ({post}) => {

  // console.log(books);
  const [isAddPostCompo, setisAddPostCompo] = useState(false);
  const [postForEdit, setpostForEdit] = useState(null)
  const [isPostEdit, setisPostEdit] = useState(false);
  

  
  const handleEditPost = (curBook) => {
    setisAddPostCompo(true)
    setpostForEdit(curBook)
  }

  const handlePostDelete = async(id) => {
    const conf =  window.confirm("Do you really want to Delete Post ?")

    if(conf){
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post`, {
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
    setpostForEdit()
  }


  return (
    <div className="AddBook">
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
          <h3 className="text-3xl py-3 mt-5 font-semibold">Posts</h3>
        </div>
        <div className="flex  items-center justify-end px-2">
          <button
            onClick={() => {setisAddPostCompo((prev) => !prev), ResetForm(), setisPostEdit(false) }}
            className="text-end  bg-[#6366f1] py-1 px-4 text-white mt-4"
          >
            {!isAddPostCompo ? "Add Post" : "Show Post"}
          </button>
          
        </div>
      </div>
      {isAddPostCompo ? (
       <AddPostCompo postForEdit={postForEdit} isPostEdit={isPostEdit} />
      ) : ( 


 <div className="books sm:py-12 m-2 ">
         
    <section  className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100 ">

    {
      post.map((curPost, id) => {

       const  {title, category, home_para, img1, _id, post_slug  } = curPost;

        return(
          
      <div key={id} className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="w-[90%] md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img className='mr-3' src={img1} alt="" />
        </div>
        <div className="md:flex-grow">
          <span className="font-semibold title-font text-gray-700">{category}</span>
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          <p className="leading-relaxed">{home_para}</p>
          <Link  href={`/post/${post_slug}`}>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">View More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
          <button 
            onClick={()=> {handleEditPost(curPost), setisPostEdit(true)}}
            className=" ml-4 inline-flex text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600  text-lg">
              Edit
            </button>
            <button 
            onClick={()=> handlePostDelete(_id)}
            className=" ml-4  text-white bg-red-600  border-0 py-1 px-5 focus:outline-none   text-lg">
              Delete
            </button>
        </div>
      </div>
      

        )
      })
    }


    </div>
  </div>
</section>

       
             </div> 

        
      )
      
      
      }
      
    </div>
  );
};





 





export default AddPost;











