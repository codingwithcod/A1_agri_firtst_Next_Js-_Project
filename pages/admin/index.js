import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const adminLogin = () => {

  const router = useRouter();

 const [formData, setFormData] = useState({});



 const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
 } 

 const handleSubmit = async(e) => {
        e.preventDefault();

    
      let res = await fetch("http://localhost:3000/api/admin/login", {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
          },
          body: JSON.stringify(formData),
      })

      let response = await res.json();

      console.log(response);
      if(response.success){
          localStorage.setItem('A1NextAProfile', response.token)

        toast.success(response.success, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          setTimeout(() => {
            router.push("/admin/dashboard")
          }, 1000);
          resetForm()
      }
      else if(response.error){
        toast.error(response.error, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      };

 }

 const resetForm = () => {
    setFormData({})
 }

 useEffect(() => {
       if(localStorage.getItem('A1NextProfile')){
        router.push("/")
       }
}, []);



  return (
    <div className="login ">
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
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8 bg-gray-50 p-6 rounded-lg">
          <div className="text-center">
          <span className=' font-bold text-2xl bg-[#6366f1] text-white  rounded-full  px-2 border-[#6366f1]'>A1</span>
        <span className=" text-3xl font-bold">Agriculture</span>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
             Sign in to your account
            </h2>
           
          </div>

          {/* form Start  */}
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
           

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              
              

            </div>

           
          

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none "
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default adminLogin;
