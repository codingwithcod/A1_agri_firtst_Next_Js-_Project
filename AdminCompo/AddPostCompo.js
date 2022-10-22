import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const AddPostCompo = ({postForEdit, isPostEdit}) => {


    const [postData, setPostData] = useState({});

    useEffect(() => {
        if(postForEdit == null){
            // console.log(" null");
        }else{
            setPostData(postForEdit)

        }
    }, []);


    const handleChange = (e) => {
      setPostData( {...postData, [e.target.name]:e.target.value})
    }
  
    const handleSubmit = async(e) => {
        e.preventDefault()


        if(isPostEdit){

        const {updatedAt, createdAt, ...otherAll} = postData;


            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post`, {
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
  
            setPostData({})
  
  
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

            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post`, {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(postData),
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
  
            setPostData({})
  
  
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
        Title
      </label>
      <input
        type="text"
        className="bg-gray-50 border  border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
        placeholder="Enter post title"
        required
        onChange={handleChange}
        name="title"
        value={postData.title  || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Category
      </label>
      <input
        type="text"
        className="bg-gray-50 border  border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
        placeholder="Category"
        required
        onChange={handleChange}
        name="category"
        value={postData.category  || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Post Slug
      </label>
      <input
        type="text"
        className="bg-gray-50 border  border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
        placeholder="eg: blogpost-category-1"
        required
        onChange={handleChange}
        name="post_slug"
        value={postData.post_slug  || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Home Paragraph
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none  block w-full p-2"
        placeholder="Enter question"
        required
        onChange={handleChange}
        name="home_para"
        value={postData.home_para  || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Image 1
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Enter image url"
        required
        onChange={handleChange}
        name="img1"
        value={postData.img1  || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Image 2
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Optional"
        onChange={handleChange}
        name="img2"
        value={postData.img2 || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Image 3
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Optional"
        onChange={handleChange}
        name="img3"
        value={postData.img3 || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Paragraph 1
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Enter question"
        required
        onChange={handleChange}
        name="para_1"
        value={postData.para_1 || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Paragraph 2
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Optional"
        onChange={handleChange}
        name="para_2"
        value={postData.para_2 || ""}
      />
    </div>
    <div className="mt-2">
      <label
        className="block mb-0 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        Paragraph 3
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-[#6366f1] text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2"
        placeholder="Optional"
        onChange={handleChange}
        name="para_3"
        value={postData.para_3 || ""}
      />
    </div>


  </div>
  <div className="flex justify-center items-center">
    <button
      type="submit"
      className="  show-more bg-[#6366f1] py-2 px-4 text-white  mt-5 "
    >
     {
        isPostEdit ? "Edit Post" : "Add to All Post"
     }
    </button>
  </div>
</form>
</div>
    </>
  )
}

export default AddPostCompo