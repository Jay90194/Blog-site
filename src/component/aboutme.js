import React from 'react'
import "./styles/Aboutme.css"
import Lips from "../image/aboutmelips.png"
import bb from "../image/bb.png"
import {useStaticQuery} from "gatsby"
import Img from "gatsby-image"

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
            <div className=" lg:h-129 pb-5 lg:flex items-center  lg:-ml-64">
            <div className="mt-8 lg:mt-0 lg:w-1/2  lg:mx-20">
                    <div className="flex items-center lg:h-129 justify-center lg:justify-end">
                        <div className="max-w-lg h-auto lg:ml-32">
                        <img className="Lips absolute -mt-20 ml-20 w-48 Lips lg:w-64 lg:ml-200 lg:-mt-20" src={Lips} alt="none"/>
                            <Img className="profileimg relative  mx-auto w-48 h-48 lg:h-127 lg:w-127 rounded-full object-cover object-fit lg:ml-40" fluid={edge.node.profilePicture.fluid} alt="profile picture"/>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="text-center overflow-hidden lg:ml-15 py-16 lg:w-1/2">
                    <h2 className="titleabout text-black  text-2xl lg:pb-5 lg:text-5xl">{edge.node.title}</h2>

                    <p className="text-gray-700 pt-12 lg:mx-auto lg:max-w-md mt-4">
                        {edge.node.description}
                    </p>
                </div>
                <img className="bb absolute -mt-10 ml-40 w-40 h-40 lg:w-64 lg:-mt-127  lg:h-64 " src={bb} alt=""none/>
            </div>
        </div>
    </section>
            )

        })}
   
    </div>
        </>
    )
}
