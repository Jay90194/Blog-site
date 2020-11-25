import React from 'react'
import './styles/ig.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blob from "../image/blob1.svg"
import Img from "gatsby-image"
import {useStaticQuery} from 'gatsby'

export default function Igsection() {
  const data = useStaticQuery(graphql`
  {
    allContentfulInstagramSection(limit: 1) {
      edges {
        node {
          photo1 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo2 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo3 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo4 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo5 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo6 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo7 {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photo8 {
            fluid(toFormat: WEBP) {
              src
            }
          }
        }
      }
    }
  }
`)  
  const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
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
        <div className="w-full overflow-hidden  p-1    ">
          <img className="absolute blob overflow-hidden h-128 ml-10 -mt-19   lg:-mt-33 " src={blob} alt="none"/>
         <h2 className="text-gray-800 p-4 text-center font-medium capitalize text-xl mb-5 lg:text-2xl">Recent post on Instagram</h2>
         <Slider {...settings}>
         <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo1.fluid} />
              </div>
              
            )
          })}
        </div>
        <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo2.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo3.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo4.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo5.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo6.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo7.fluid} />
              </div>
            )
          })}
        </div>   <div>
          {data.allContentfulInstagramSection.edges.map((edge)=>{
            return(
              <div className="max-w-xs p-3 h-64 w-full text-center lg:h-129 mb-24">
                <Img className="this lg:h-129 ml-5 w-full object-cover object-center lg:h-129 mx-auto" fluid={edge.node.photo8.fluid} />
              </div>
            )
          })}
        </div>
        </Slider>
      </div>
      </>
    );
  }
