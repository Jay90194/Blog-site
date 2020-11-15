import React from 'react'
import '../css/index.css'
import {Link} from "gatsby"




export default function Blogsection(props) {
    return (
        <>
       <ol>
       
  
             
               <section class="bg-gray-100  lg:p-20 lg:flex lg:justify-center">
        <div class="bg-pink-200 m-5 lg:min-w-full  lg:mx-8 lg:flex  lg:max-w-full lg:h-200 lg:shadow-lg lg:rounded-lg">
            <div class=" lg:w-1/2">
            <div class="h-64  bg-gray-300 bg-cover border-black border-solid border lg:rounded-lg lg:h-full"></div>
            </div>

            <div class="py-6 px-6 max-w-xl lg:max-w-6xl lg:w-full">
          
                <h2 class="text-4xl text-gray-800 font-bold md:text-5xl">{props.title} </h2>
              
                <p class="mt-4 text-gray-600">{props.shortdescription}</p>
                
                <div class="mt-20 lg:mt-32">
                <Link to={`/blog/${props.path}`} class="bg-white text-gray-900 px-5 py-3 hover:text-yellow-500 font-semibold rounded ">READ MORE </Link>
                     <p class="float-right  bg-white font-normal text-xs rounded-xl p-1 lg:ml-20">{props.date}</p>
                </div>
            </div>
        </div>
    </section>  
               
    

      
    </ol>
    
   
    
        </>
   
    )
}
