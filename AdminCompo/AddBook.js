import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import AddBookCompo from "./AddBookCompo";




const AddBook = ({books}) => {

  // console.log(books);
  const [isAddBookCompo, setIsAddBookCompo] = useState(false);
  const [bookForEdit, setBookForEdit] = useState(null)
  const [isBookEdit, setIsBookEdit] = useState(false);
  

  
  const handleEditBook = (curBook) => {
    setIsAddBookCompo(true)
    setBookForEdit(curBook)
  }

  const handleBookDelete = async(id) => {
    const conf =  window.confirm("Do you really want to Delete Book ?")

    if(conf){
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books`, {
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
    setBookForEdit()
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
          <h3 className="text-3xl py-3 mt-5 font-semibold">Books</h3>
        </div>
        <div className="flex  items-center justify-end px-2">
          <button
            onClick={() => {setIsAddBookCompo((prev) => !prev), ResetForm(), setIsBookEdit(false) }}
            className="text-end  bg-[#6366f1] py-1 px-4 text-white mt-4"
          >
            {!isAddBookCompo ? "Add Book" : "Show Books"}
          </button>
          
        </div>
      </div>
      {isAddBookCompo ? (
       <AddBookCompo bookForEdit={bookForEdit} isBookEdit={isBookEdit} />
      ) : ( 


 <div className="books sm:py-12 m-2 ">
         
         {
           books.map((curBook, id) => {
       
             const {book_name, auther, img, _id, desc} = curBook;
       
             return(
             <section key={id} className="text-gray-600 body-font m-2 my-4 p-4">
           <div className="container mx-auto flex  p-5 md:flex-row flex-col items-center border border-indigo-400  shadow-md hover:bg-gray-100 ease-out duration-300">
       
       
             <div className="lg:max-w-base lg:w-1/5 md:w-1/4 w-1/2 mb-10 md:mb-0 h-1/6">
               <img
                 className="object-cover object-center rounded"
                 alt={book_name}
                 src={img}
               />
             </div>
             <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
               <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               {book_name}
               </h3>
               <h3 className="sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
               {auther}
               </h3>
               <p className="mb-8 leading-relaxed">
                 {desc}
               </p>
               <div className="flex justify-center">
                 
                 <a href={`/books/${_id}`} target="new">
                  <button className=" inline-flex text-gray-700 bg-gray-200 border-0 py-1 px-5 focus:outline-none hover:bg-gray-300  text-lg">
                    View More
                  </button>
                  </a>

                  <button 
                  onClick={()=> {handleEditBook(curBook), setIsBookEdit(true)}}
                  className=" ml-4 inline-flex text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600  text-lg">
                   Edit
                 </button>
                  <button 
                  onClick={()=> handleBookDelete(_id)}
                  className=" ml-4  text-red-500  border-0 py-1 px-5 focus:outline-none hover:bg-[#0000]  text-lg">
                   Delete
                 </button>
                 
               </div>
             </div>
           </div>
           </section>)
       
       })
                   }   
       
             </div> 

        
      )
      
      
      }
      
    </div>
  );
};





 





export default AddBook;











