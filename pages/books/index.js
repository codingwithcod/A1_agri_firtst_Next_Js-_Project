import Link from "next/link";
import React from "react";

const books = ({books}) => {
  

 


return (

     

      <div className="books sm:py-12 ">
         
  {
    books.map((curBook, id) => {

      const {_id, book_name, auther, img, desc} = curBook;

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
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Buy Now
          </button>
          <Link href={`/books/${_id}`}>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
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

  const res = await fetch(`${process.env.BASE_URL}/api/admin/books/`)
  const books = await res.json()

  return {
    props: {
      books,
    },
  }
}





export default books;
