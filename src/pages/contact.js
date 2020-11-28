import React from 'react'
import Contact from '../component/contact'
import SEO from '../component/SEO'
import Layout from '../component/layout'


export default function contact() {
    return (
        <>
        <Layout>
        <SEO
            title="Contact"
        />
            <Contact />
        </Layout>
        
        
        </>
    )
}
