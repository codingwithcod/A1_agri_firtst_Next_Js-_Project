import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const AddBookCompo = ({bookForEdit, isBookEdit}) => {


    const [bookData, setBookData] = useState({});

    useEffect(() => {
        if(bookForEdit == null){
            // console.log(" null");
        }else{
            setBookData(bookForEdit)

        }
    }, []);


    const handleChange = (e) => {
      setBookData( {...bookData, [e.target.name]:e.target.value})
    }
  
    const handleSubmit = async(e) => {
        e.preventDefault()


        if(isBookEdit){

        const {updatedAt, createdAt, ...otherAll} = bookData;


            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books`, {
          method: "PUT",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(otherAll),
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

        }else{

            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books`, {
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

  
  
        
        
  
  
    }



  return (
    <>
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
     {
        isBookEdit ? "Edit Book" : "Add to All Books"
     }
    </button>
  </div>
</form>
</div>
    </>
  )
}

export default AddBookCompo