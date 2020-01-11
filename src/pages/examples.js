import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

const examples = props => {
 const {name, age} = props.data.site.siteMetadata.person

 return (
  <Layout>
   <HeaderHook />
   <HeaderStatic />
   <div>
     this is our person
    <h4>name: {name}</h4>
    <h4>name: {age}</h4>
    </div>
  </Layout>
 )
}

export const getData = graphql`
 query  {
  site {
    siteMetadata {
      description
      siteTitle:title
      author
      person: data{
        age
        name
      }
    }
  }
}

`

export default examples
