import React from 'react'
import './ig.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Igsection() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,    
        cssEase: "linear",
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
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        };

    return (
        <>
        <div class=" w-full  p-1  ">
         <h2 class="text-gray-800 p-4 text-center font-medium capitalize text-xl mb-5 md:text-2xl">Recent post on Instagram</h2>
         <Slider {...settings}>
          <div class="max-w-xs w-full text-center mb-24">
                    <img class="this h-129 ml-10  w-full object-cover object-center mx-auto " src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar"/>
                </div>
                <div class="max-w-xs w-full text-center">
                    <img class="this h-129 ml-10 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs w-full text-center">
                    <img class="this h-129 ml-10 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs w-full text-center">
                    <img class="this h-129 ml-10 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs w-full text-center">
                    <img class="this h-129 ml-10 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs w-full text-center">
                    <img class="this h-129 ml-10 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
        </Slider>
      </div>
      </>
    );
  }
