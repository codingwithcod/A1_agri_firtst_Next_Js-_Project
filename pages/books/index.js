import Link from "next/link";
import React from "react";
import axios from 'axios';





const Books = ({books}) => {
  

 


return (

     

      <div className="books sm:py-12 ">
         
  {
    books.map((curBook, id) => {

      const {_id, book_name, auther, img, desc} = curBook;

      return(
      <section key={id} className="text-gray-600 body-font m-2 my-4  ">
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
          <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600  text-lg font-medium">
            Buy Now
          </button>
          <Link href={`/books/${_id}`}>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-1 px-6 focus:outline-none hover:bg-gray-300  text-lg font-medium">
            View More
          </button>
          </Link>
        </div>
      </div>
    </div>
    </section>)

})
            }   

            
        
      
      </div>
 

      
      
);

 
  

};


export async function getStaticProps() {


  // const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books/`)
  // const books = await res.json()
  
  
  const resAxios = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/admin/books/`)
  const books = await resAxios.data


  return {
    props: {
      books:books,
    },
    
  }
}





export default Books;
