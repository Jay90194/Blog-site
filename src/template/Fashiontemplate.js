import React from 'react'
import Layout from '../component/layout'



export const query = graphql`
query  {
    contentfulFashion {
      body
      title
      date(fromNow: true)
    }
  }
`


export default function Fashiontemplate({data}) {
    return (
       <>
       <Layout>
           <h1 className="text-3xl text-center font-bold">{data.contentfulFashion.title} </h1>
           <p>{data.contentfulFashion.date} </p>
           <p>{data.contentfulFashion.body} </p>
      
       </Layout>
       </>
    )
}
