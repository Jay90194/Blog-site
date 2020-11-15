import React from 'react'
import './styles/ig.css'
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
        speed: 20000,
        autoplaySpeed: 20000,    
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
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
        };

    return (
        <>
        <div class=" w-full  p-1    ">
         <h2 class="text-gray-800 p-4 text-center font-medium capitalize text-xl mb-5 md:text-2xl">Recent post on Instagram</h2>
         <Slider {...settings}>
         <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this  lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this  lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
                <div class="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                    <img class="this  lg:h-129 ml-5 w-full object-cover object-center mx-auto" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                </div>
        </Slider>
      </div>
      </>
    );
  }
