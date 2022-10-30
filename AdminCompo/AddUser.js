import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddUser = ({users}) => {

  const [filterUser, setFilterUser] = useState(users);
  const [isActive, setIsActive] = useState("All")

 
  const filterMemberUser = () => {
   const member = users.filter((curUser)=> {
      return curUser.isMember == true
    })
    setFilterUser(member)
  }
  const filterAdminUser = () => {
   const admin = users.filter((curUser)=> {
      return curUser.isAdmin == true
    })
    setFilterUser(admin)
  }


  
  const handleUserDelete = async(id) => {
    const conf =  window.confirm("Do you really want to Delete User ?")
    
    if(conf){
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
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


  const handleUserUpdate = async(id, isMember) => {
    const conf =  window.confirm("Do you really want to Update User ?")
    console.log(isMember);
    const data = {id: id, Member:isMember}
    
    if(conf){
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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






  const ActiveClass = "flex justify-center items-center border  border-[#6366f1] py-1 px-3  text-[#6366f1]  cursor-pointer font-md";
  const NoneActiveClass = "flex justify-center items-center  bg-[#6366f1] py-1 px-3  text-white  cursor-pointer font-md";
  
  
  return (
    <div>
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
    <h4 className='text-center m-3 text-3xl font-semibold'> All Users</h4>

      <div className='top-filter border-b-2  flex gap-5 m-2 '>
      <button onClick={() =>{setFilterUser(users); setIsActive("All")}} className={isActive == "All" ? `${ActiveClass}`: `${NoneActiveClass}`}>All user ({users.length})</button>
      <button onClick={() => {filterMemberUser(); setIsActive("Member")}} className={isActive == "Member" ? `${ActiveClass}`: `${NoneActiveClass}`}>Member</button>
      <button onClick={() => {filterAdminUser(); setIsActive("Admin")}} className={isActive == "Admin" ? `${ActiveClass}`: `${NoneActiveClass}`}>Admin</button>
      <button onClick={() => {filterAdminUser(); setIsActive("rootAdmin")}} className={isActive == "rootAdmin" ? `${ActiveClass}`: `${NoneActiveClass}`}>Root Admin</button>

      </div>

      <div className='main p-2' >
      
      
        
        {
          filterUser.map((curUser, id)=> {

          const {name, email, isAdmin, isMember, _id} = curUser;
          return(
            <div key={id} className='user-card border border-indigo-500 m-2 flex flex-col gap-5 p-2 bg-gray-100'>
              <div className='flex sm:gap-5 '>
                <div className="flex  p-2  items-center  ">
                  <img className='w-24' src="/profilePic.svg" alt="profileImg" />
                </div>
                <div className="content">
                  <h5>name</h5>
                  <p>Email</p>
                  <p>Mob</p>
                  <p>Member</p>
                  <p className='bg-green-500 px-4' >{isAdmin ? "Admin": ""}</p>
                </div>
                <div className="content ml-5">
                  <h5>: {name}</h5>
                  <p>: {email}</p>
                  <p>: +9198324897342</p>
                  <p>: {isMember ? "Yes": "No"}</p>
                  
                </div>
              </div>

              <div className='flex j items-center  gap-5   '>
            <button className="  bg-[#6366f1] py-1 px-3  text-white  cursor-pointer">Edit</button>
            <button onClick={()=> handleUserDelete(_id)} className=" flex justify-center items-center  bg-red-600  px-3 py-1 text-white  cursor-pointer">Delete</button>
            <button onClick={() => handleUserUpdate(_id, isMember)} className=" flex justify-center items-center  bg-[#6366f1]  px-3 py-1 text-white  cursor-pointer">{isMember ? "Remove Member": "Make Member"}</button>
            <button className=" flex justify-center items-center  bg-[#6366f1]  px-3 py-1 text-white  cursor-pointer">{isAdmin ? "Demote Admin": "Promot to Admin"}</button>

              </div>

        </div>
          )
        })}
        

          


        
        
       
        
      

        


      </div>

      


    </div>
  )
}

export default AddUser;