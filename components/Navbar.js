import React, { useState } from 'react';
import Link from 'next/link';
import { CgMenu, CgClose, CgProfile } from "react-icons/cg";

const Navbar = ({user}) => {

    const [openMenu, setOpenMenu] = useState(false);

  



  return (
    <div className="navbar shadow-md flex justify-between px-2 sm:px-4 h-16 sticky top-0 bg-white z-50">
            <div className="hamburger flex justify-center items-center text-3xl md:hidden">
            <CgMenu onClick={() => setOpenMenu(true)}/>
            </div>

            {/* mobile navbar menu  */}
            <div className={`absolute top-0 left-0 w-[16rem]  transition  ease-linear   bg-[#6366f1] md:hidden ${openMenu ? '':'-translate-x-[100%]'}`}>
            <div className="closeBtn flex justify-end p-4 text-3xl ">
                <CgClose onClick={() => setOpenMenu(false)} 
                className='border-2 border-white text-white rounded-sm'/>
            </div>
            <ul className=' flex flex-col  pt-2 pl-3 space-y-2  h-[100vh]  text-white font-bold text-2xl'>
                        <li></li>
                        <Link href='/'><a> <li onClick={() => setOpenMenu(false)} >Home</li></a></Link>
                        <hr />
                        <Link href='/post'><a> <li onClick={() => setOpenMenu(false)} >Post</li></a></Link>
                        <hr />
                        <Link href='/quiz'><a> <li onClick={() => setOpenMenu(false)} >Quiz</li></a></Link>
                        <hr />
                        <Link href='/books'><a> <li onClick={() => setOpenMenu(false)} >Books</li></a></Link>
                        <hr />
                        <Link href='/about'><a> <li onClick={() => setOpenMenu(false)} >About</li></a></Link>
                        <hr />
                        <Link href='/profile'><a> <li onClick={() => setOpenMenu(false)} >Profile</li></a></Link>
                    </ul>

                    <div className='bottom-logo absolute bottom-[4.5rem] left-3 '>
                    <span className=' font-bold text-2xl text-[#6366f1] bg-white  rounded-full px-2 border-[#6366f1]'>A1</span>
                <span className=" text-3xl font-bold text-white">Agriculture</span>
                    </div>
            </div>

            <div className="logo flex justify-center  items-center md:justify-start text-2xl  w-[70%]">
                <div className='cursor-pointer'>
                <span className=' font-bold text-2xl bg-[#6366f1] text-white  rounded-full px-2 border-[#6366f1]'>A1</span>
                <span className=" text-3xl font-bold">Agriculture</span>
                </div>
                <div className='nav-items  hidden md:flex justify-center   h-[100%] pb-1 w-full  ml-5 '>
                    <ul className='flex  items-end justify-center space-x-8  h-[100%] text-black text-lg font-semibold'>
                        <Link href='/'><a> <li  >Home</li></a></Link>
                        <Link href='/post'><a> <li  >Post</li></a></Link>
                        <Link href='/quiz'><a> <li  >Quiz</li></a></Link>
                        <Link href='/books'><a> <li  >Books</li></a></Link>
                        <Link href='/about'><a> <li  >About</li></a></Link>
                        
                    </ul>
                </div>
            </div>

            <div className="ProfileIcon flex justify-center items-center text-3xl cursor-pointer">
            {
                (user.value===null) ? <Link href='/login'><a className='mt-4 ml-4 text-xl text-[#6f71f6] hover:underline hover:text-[#6264f5]'>Login?</a></Link> :
                <Link href='/profile'><a><CgProfile/></a></Link>
            }
                
            </div>

    </div>
  )
}

export default Navbar