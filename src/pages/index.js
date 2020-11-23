import React from "react"
import Aboutme from "../component/aboutme"
import Herodiv from "../component/Herodiv"
import Igsection from "../component/igsection"
import Layout from "../component/layout"
import "./global.css"
import {graphql,useStaticQuery} from "gatsby"
import Blogpiece from "../component/blogpiece"
import Head from "../component/Head"




export default function Home(props) {
  const data = useStaticQuery(graphql`
  {
    allContentfulAllblogs(sort: {order: DESC, fields: date}, limit: 6) {
      edges {
        node {
          date(fromNow: true)
          title
          slug
          shortDescription
          featureImage {
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    allContentfulFrontPageHero {
      edges {
        node {
          image {
            fluid(toFormat: WEBP ) {
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
    <Layout>
    <Head
    title="Home" />
      <div>
    {data.allContentfulFrontPageHero.edges.map((edge)=>{
      return(
        <Herodiv 
          image={edge.node.image.fluid}
        />
      )
    })}
    </div>
      
    <div className="grid grid-cols-2  lg:grid-cols-3 "> 
         {data.allContentfulAllblogs.edges.map((edge)=>{
           return(
          <Blogpiece 
            title={edge.node.title}
            path={edge.node.slug}
            image={edge.node.featureImage.fluid}
          />
          )
        })}
        </div>
               
    <Igsection />
    <Aboutme  />
    </Layout>

    </>


  )
}
