import React from 'react'
import Banner from '../component/banner'
import Blogsection from '../component/blogsection'
import Layout from '../component/layout'
import SEO from '../component/SEO'
import {useStaticQuery} from 'gatsby'


export default function Lifestyle() {
    const data = useStaticQuery(graphql`
    {
      allContentfulAllblogs(sort: {order: DESC, fields: date}, filter: {category: {eq: "Lifestyle"}}) {
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
          <SEO 
              title='Lifestyle'
          />
          <Banner 
          title="Lifestyle"
        />
        <div>
       {data.allContentfulAllblogs.edges.map((edge) =>{
           return (
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
