import React from 'react'
import Blogsection from '../component/blogsection'
import Layout from "../component/layout"
import { graphql,useStaticQuery} from "gatsby"


export default function Blog() {
 const data = useStaticQuery(graphql`
 {
   allContentfulAllblogs {
     edges {
       node {
         date(fromNow: true)
         title
         slug
         shortDescription
         secondbody
         richTextBody {
           raw
         }
       }
     }
   }
 }
`)

    return (
      <>
      <Layout>
    <div>
    {data.allContentfulAllblogs.edges.map((edge) =>{
      return(
        <Blogsection 
          title={edge.node.title}
          date={edge.node.date}
          shortdescription={edge.node.shortDescription}
          path={edge.node.slug}
        />
        
         )})}
        </div>
        
      </Layout>
      </>
    )
}
