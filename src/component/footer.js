import React from 'react'
import {Link} from "gatsby"
import footerleaf from "../image/footerleaf.png"
import footerleaf2 from "../image/footerleaf2.png"
import "../component/styles/footer.css"


export default function Footer() {
    return (
        <>
        
    <footer className=" mt-10 flex justify-center  text-black bg-pink-200">
      
        <div className="w-full overflow-hidden h-128 py-6">
        
            <h1 className="text-center text-lg font-sans font-semibold lg:text-2xl">
                Join 5, 000+ other and never miss <br /> out on new tips, tutorials, and more.
            </h1>

            <div className="flex justify-center mt-6">
                <div className="bg-white rounded-md">
                    <div className="flex flex-wrap justify-between md:flex-row">
                        <input type="email" className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                        <button className="w-full m-1 p-2 text-sm bg-white rounded font-semibold uppercase lg:w-auto hover:text-yellow-600">subscribe</button>
                    </div>
                </div>
            </div>

            {/* <hr className="h-px mt-6 mb-6  text-center bg-gray-700 border-none"/> */}

            <div className="flex flex-col items-center justify-between mt-3 mb-3 md:flex-row">

                <div className=" flex mt-4 mb-4 md:m-0 lg:m-auto">
                    <div className="grid grid-cols-1 text-center p-4 mx-4 mb-4">
                        <Link to="/" className="p-5   text-sm text-black font-medium hover:text-yellow-600">HOME</Link>
                        <Link to="/fashion" className="p-5  text-sm text-black font-medium hover:text-yellow-600">FASHION</Link>
                        <Link to="/blog" className=" p-5 text-sm text-black font-medium hover:text-yellow-600">ALL BLOGS</Link>
                        <Link to="/contact" className="p-5  text-sm text-black font-medium hover:text-yellow-600">CONTACTS</Link>
                    </div>
                </div>
            </div>
            <img className="leaf1 -ml-10 -mt-33 w-48 h-40 lg:w-200 lg:h-200 lg:-mt-57 lg:rotate-0 lg:-ml-20" src={footerleaf} alt="none" />
            <img className="leaf2 float-right -mt-33 mt-30 w-48 h-40 lg:w-127 lg:-mt-57  lg:h-127" src={footerleaf2} alt="none" />        
        </div>
    </footer>
        </>

    )
}
