import React from 'react'
import {Link} from "gatsby"

export default function Footer() {
    return (
        <>
        
    <footer class=" mt-10 flex justify-center px-4 text-black bg-pink-200">
        <div class="container h-129 py-6">
            <h1 class="text-center text-lg font-sans font-semibold lg:text-2xl">
                Join 5, 000+ other and never miss <br /> out on new tips, tutorials, and more.
            </h1>

            <div class="flex justify-center mt-6">
                <div class="bg-white rounded-md">
                    <div class="flex flex-wrap justify-between md:flex-row">
                        <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                        <button class="w-full m-1 p-2 text-sm bg-white rounded font-semibold uppercase lg:w-auto hover:text-yellow-600">subscribe</button>
                    </div>
                </div>
            </div>

            <hr class="h-px mt-6 mb-6 bg-gray-700 border-none"/>

            <div class="flex flex-col items-center justify-between mt-3 mb-3 md:flex-row">

                <div class="border border-solid border-black border-px flex mt-4 mb-4 md:m-0 lg:m-auto">
                    <div class="grid grid-cols-1 text-center p-4 mx-4 mb-4">
                        <Link to="/" class="px-4 pt-4  text-sm text-black font-medium hover:text-yellow-600">HOME</Link>
                        <Link to="/fashion" class="px-4 pt-4 text-sm text-black font-medium hover:text-yellow-600">FASHION</Link>
                        <Link to="/review" class="px-4 pt-4 text-sm text-black font-medium hover:text-yellow-600">PRODUCT REVIEW</Link>
                        <Link to="/blog" class="px-4 pt-4  text-sm text-black font-medium hover:text-yellow-600">ALL BLOGS</Link>
                        <Link to="/contact" class="px-4 pt-4 text-sm text-black font-medium hover:text-yellow-600">CONTACTS</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>

    )
}
