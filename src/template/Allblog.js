import React from 'react'
import Layout from '../component/layout'



export const query = graphql`
query  {
  contentfulAllblogs {
    title
    date(fromNow: true)
    secondbody
  }
}
`


export default function Allblog({data}) {

    return (
       <>
       <Layout>
           <h1 className="text-3xl text-center font-bold">{data.contentfulAllblogs.title} </h1>
           <p>{data.contentfulAllblogs.date} </p>
           <p>{data.contentfulAllblogs.secondbody} </p>
      
       </Layout>
       </>
    )
}
