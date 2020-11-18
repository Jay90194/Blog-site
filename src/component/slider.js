import React  from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "gatsby"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  };
  return (
    <div class=" m-1  mb-5 ">
    <div class='text-3xl p-6'>
      <p>Recent Blogs</p> 
    </div>
    <Slider {...settings}>
       {/* SECTION */}
       <div className=" max-w-xs ml-2 lg:max-w-sm   lg:ml-12 overflow-hidden ">
       
        <img className="w-48 h-56 object-cover rounded-xl  lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div className="text-center">
            <Link to="#" className="block text-base  -ml-5  font-serif pt-4 lg:text-xl text-gray-800 font-bold">How To Get A Perfect Makeup</Link>
         <button className="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
       {/* SECTION */}
       <div className=" max-w-sm ml-2 overflow-hidden ">
        <img className="w-48 h-56 object-cover rounded-xl  lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div className="text-center">
            <Link to="#" className="block text-base  font-serif pt-4 lg:text-xl text-gray-800 font-bold">How To Get A Perfect Makeup</Link>
         <button className="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
      
       {/* SECTION */}
       <div className=" max-w-sm ml-2 overflow-hidden ">
        <img className="w-48 h-56 object-cover rounded-xl  lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div className="text-center">
            <Link to="#" className="block text-base  font-serif pt-4 lg:text-xl text-gray-800 font-bold">How To Get A Perfect Makeup</Link>
         <button className="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>

    <div className=" max-w-sm ml-2 overflow-hidden ">
        <img className="w-48 h-56 object-cover rounded-xl  lg:w-full " src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80s" alt="avatar"/>
        <div className="text-center">
            <Link to="#" className="block text-base  font-serif pt-4 lg:text-xl text-gray-800 font-bold">How To Get A Perfect Makeup</Link>
         <button className="px-2 py-3 mt-3 my-2 text-center  bg-pink-200 text-xs text-gray-900 font-bold uppercase hover:text-yellow-600 focus:bg-gray-400">READ MORE</button>
        </div>
    </div>
    </Slider>
  </div>
);
}