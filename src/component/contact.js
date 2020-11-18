import React from 'react'
import "./styles/contact.css"
export default function Contact() {
    return (
        <>
        <div>
    <h1 class="Headtitle text-4xl mt-24 lg:text-6xl    ">Let's Colabrate</h1>
    </div>   
    <div class="forms bg-pink-200 w-full mt-32 text-center max-w-sm rounded-3xl shadow-md overflow-hidden mx-auto">
        <div class="py-4 px-6   ">
            <h2 class="text-center font-bold text-gray-700 text-3xl">HIPPIE GIRL</h2>

            <p class="mt-1 text-center text-gray-500">Feel Free To Contact us</p>

            <form>
                
            <div class="mt-4 w-full">
                    <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Your Name"/>
                </div>

                <div class="mt-4 w-full">
                    <input class="w-full mt-2 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="email" placeholder="Email Address" aria-label="Email Address"/>
                </div>

                <div class="mt-4 w-full ">
                    <input class="w-full mt-2 h-20 py-2 px-4 bg-white text-gray-700 border border-gray-300 rounded block placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Your Message" />
                </div>
                
                <div class="flex justify-between items-center mt-4">

                    <button class="py-2 px-4 bg-gray-700 mx-auto text-white rounded hover:bg-gray-600 focus:outline-none" type="button">
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    </div>
   
   
   
    <div class="mt-20 grid grid-rows-1">
    
            <p>PRODUCT REVIEW</p>
       
            <p>DEDICATED BRAND <br/> BLOG POST</p>
      
            <p>GUEST POST</p>
       
            <p>&</p>
                <p>MORES</p>
         
    </div>
        </>

    )
}
