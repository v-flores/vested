import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const getData = graphql`
 query  {
  site {
    siteMetadata {
      description
      siteTitle:title
      author
      data{
        age
      }
    }
  }
}`


const HeaderStatic = () => {
  return(
    <StaticQuery 
    query={getData} 
    render={(data)=>{
      console.log(data)

    return (
    <div>
      <h1>{data.site.siteMetadata.description}</h1>
    </div>)
  }}>
  </StaticQuery>
 )
}

export default HeaderStatic