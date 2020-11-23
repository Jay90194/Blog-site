import React from 'react'
import Blogsection from '../component/blogsection'
import Layout from "../component/layout"
import { graphql,useStaticQuery} from "gatsby"
import Banner from '../component/banner'
import Head from '../component/Head'









export default function Blog() {
const data = useStaticQuery(graphql`
 {
   allContentfulAllblogs (sort: {order: DESC, fields: date}) {
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
 }
`)

    return (
      <>
      <Layout>
      <Head 
        title="All Blogs"
      />
      <Banner 
        title="All Blogs"
      />
      <div>
      {data.allContentfulAllblogs.edges.map((edge) =>{
        return(
          <Blogsection 
            title={edge.node.title}
            date={edge.node.date}
            shortdescription={edge.node.shortDescription}
            path={edge.node.slug}
            image={edge.node.featureImage.fluid}
          />
        
         )})}
        </div>
    

        
  
  
  
       
    
        
      </Layout>
      </>
    )
}
