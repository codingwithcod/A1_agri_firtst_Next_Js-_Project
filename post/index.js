import React from 'react'
import Link from 'next/link'
import axios from 'axios';


const Post = ({post}) => {



  
  return (
    <div>
      <section  className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100 cursor-pointer">

    {
      post.map((curPost, id) => {

       const  {title, category, home_para, img1, post_slug,  } = curPost;

        return(
          <Link key={id} href={`/post/${post_slug}`}>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="w-[90%] md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <img className='mr-3' src={img1} alt="" />
        </div>
        <div className="md:flex-grow">
          <span className="font-semibold title-font text-gray-700">{category}</span>
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          <p className="leading-relaxed">{home_para}</p>
          <a className="text-indigo-500 hover:text-indigo-400 inline-flex items-center mt-4 font-semibold">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </Link>

        )
      })
    }

      

      


    </div>
  </div>
</section>
    </div>
  )
}



export async function getStaticProps() {

  const resAxios = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/admin/post`)
  
  const post = await resAxios.data
  


  return {
    props: {
      post:post,
    },
    
  }
}





export default Post