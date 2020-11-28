import React from 'react'
import "./styles/Aboutme.css"
import Lips from "../image/aboutmelips.png"
import bb from "../image/bb.png"
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  fainst } from '@fortawesome/free-solid-svg-icons'

export default function Aboutme() {

    const data = useStaticQuery(graphql`
        {
        allContentfulAboutMe {
            edges {
            node {
                title
                description
                profilePicture {
                    fluid(toFormat: WEBP) {
                        ...GatsbyContentfulFluid_withWebp
                      }
                }
            }
            }
        }
        }
    `)
    return (
        <>
        <div>
        {data.allContentfulAboutMe.edges.map((edge)=>{
            return(
                <section className=" overflow-hidden bg-transparent mt-10 lg:h-129">
        <div className=" mx-auto px-6 py-6">
            <div className=" lg:h-129 pb-5 overflow-hidden lg:flex items-center  lg:-ml-64">
            <div className="mt-8 lg:mt-0 lg:w-1/2  lg:mx-20">
                    <div className="flex items-center lg:h-129 justify-center lg:justify-end">
                        <div className="max-w-lg h-auto lg:ml-32">
                        <img className="Lips absolute -mt-20 ml-20 pr-8 w-48 Lips lg:w-64 lg:ml-200 lg:-mt-20" src={Lips} alt="none"/>
                            <Img className="profileimg relative  mx-auto w-48 h-48 lg:h-127 lg:w-127 rounded-full object-cover object-fit lg:ml-40" fluid={edge.node.profilePicture.fluid} alt="profile picture"/>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="text-center overflow-hidden lg:ml-15 py-16 lg:w-1/2">
                    <h2 className="titleabout text-black  text-2xl lg:pb-5 lg:text-5xl">{edge.node.title}</h2>

                    <p className="text-gray-700 pt-12 lg:mx-auto lg:max-w-md mt-4">
                        {edge.node.description}
                    </p>
                    {/* <svg className="w-8 h-8 mt-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.034 551.034">
                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                            <stop offset="0" stop-color="#e09b3d"/>
                            <stop offset=".3" stop-color="#c74c4d"/>
                            <stop offset=".6" stop-color="#c21975"/>
                            <stop offset="1" stop-color="#7024c4"/>
                        </linearGradient>
                        <path d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0zM495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722v222.722z" fill="url(#a)"/>
                        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                            <stop offset="0" stop-color="#e09b3d"/>
                            <stop offset=".3" stop-color="#c74c4d"/>
                            <stop offset=".6" stop-color="#c21975"/>
                            <stop offset="1" stop-color="#7024c4"/>
                        </linearGradient>
                        <path d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133zm0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083c48.095 0 87.083 38.988 87.083 87.083 0 48.094-38.989 87.083-87.083 87.083z" fill="url(#b)"/>
                        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                            <stop offset="0" stop-color="#e09b3d"/>
                            <stop offset=".3" stop-color="#c74c4d"/>
                            <stop offset=".6" stop-color="#c21975"/>
                            <stop offset="1" stop-color="#7024c4"/>
                        </linearGradient>
                        <circle cx="418.31" cy="134.07" r="34.15" fill="url(#c)"/>
                        </svg> */}

                </div>
                <img className="bb absolute -mt-10 ml-40 w-40 h-40 pr-8 lg:w-64 lg:-mt-127  lg:h-64 " src={bb} alt=""none/>
            </div>
        </div>
    </section>
            )

        })}
   
    </div>
        </>
    )
}
