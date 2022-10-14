import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";




const AddBook = ({books}) => {

  console.log(books);
  const [AddBookCompo, setAddBookCompo] = useState(false);

  const [bookData, setBookData] = useState({});



  const handleChange = (e) => {
    setBookData( {...bookData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => {
      e.preventDefault()


      const res = await fetch("//localhost:3000/api/admin/books", {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(bookData),
      })

      const  response = await res.json()
      if(response.success){
        toast.success(response.success, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          setBookData({})


      }else{
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
            onClick={() => setAddBookCompo((prev) => !prev)}
            className="text-end  bg-[#6366f1] py-1 px-4 text-white mt-4"
          >
            {!AddBookCompo ? "Add Book" : "Show Books"}
          </button>
          
        </div>
      </div>
      {AddBookCompo ? (
        <div className="quizCard border-2 p-4 m-2">


          <form onSubmit={handleSubmit}>
            <div className="grid gap-2 mb-4 md:grid-cols-2">
              <div className="mt-2">
                <label
                  className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border  border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="book_name"
                  value={bookData.book_name  || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Auther
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="auther"
                  value={bookData.auther  || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Describtion
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="desc"
                  value={bookData.desc  || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Full Describe
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="full_desc"
                  value={bookData.full_desc || ""}
                />
              </div>
              <div className="mt-2">
                <label
                  className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
                  placeholder="Enter question"
                  required
                  onChange={handleChange}
                  name="img"
                  value={bookData.img || ""}
                />
              </div>


            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="  show-more bg-[#6366f1] py-2 px-4 text-white  mt-5 "
              >
                Add to All Books
              </button>
            </div>
          </form>
        </div>
      ) : ( 


 <div className="books sm:py-12 ">
         
         {
           books.map((curBook, id) => {
       
             const {book_name, auther, img, _id, desc} = curBook;
       
             return(
             <section key={id} className="text-gray-600 body-font m-2 ">
           <div className="container mx-auto flex  p-5 md:flex-row flex-col items-center border-2 rounded-md shadow-sm">
       
       
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
                  <button className=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    View More
                  </button>
                  </a>

                  <button className=" ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                   Edit
                 </button>
                  <button className=" ml-4  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">
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











