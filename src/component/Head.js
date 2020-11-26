import React from 'react'
import {Helmet} from "react-helmet"
import {useStaticQuery} from 'gatsby'

export default function Head({title}) {
    const data=useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                description
                keywords
            }
        }
    }
    
    `)
    return (
        <div>
            <Helmet
            
            title={`${title} | ${data.site.siteMetadata.title}`}
            description={data.site.siteMetadata.description}
            keywords={data.site.siteMetadata.keywords}

             >
             <html lang="en" />
             </Helmet>
        </div>
    )
}
