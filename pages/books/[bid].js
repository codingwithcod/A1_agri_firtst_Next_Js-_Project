import React from 'react'

const Book = ({book}) => {


    const {book_name, auther, desc, img, full_desc} = book;



  return (



    <div className="books sm:py-12 ">
         
   
        <section  className="text-gray-600 body-font m-2 ">
      <div className="container mx-auto flex  p-5 md:flex-row flex-col items-center border border-indigo-500 shadow-md">
  
  
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
          <p className="mb-8 leading-relaxed">
            {full_desc}
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buy Now
            </button>
            
          </div>
        </div>
      </div>
      </section>)
  
 </div>
   


    
  )
}









export async function getServerSideProps({params:{bid}}) {
    

    const res = await fetch(`${process.env.BASE_URL}/api/admin/books/${bid}`)
    const book = await res.json();
    // console.log(book);

    return {
        props:{
            book
        }
    }
}




export default Book;