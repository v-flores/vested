import React from 'react'
import Releases from '../components/Releases/Releases'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const releases = ({ data }) => {
 return (
 <Layout> Hello from releases page
 <Releases releases={data.Releases.edges} />
 </Layout>)
}

export const getReleases = graphql`{
  Releases:allContentfulRelease{
    edges{
      node{
        name
        artist
        slug
        id:contentful_id
        images{
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`

export default releases