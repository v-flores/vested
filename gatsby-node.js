const path = require('path')
exports.createPages = async ({actions, graphql}) => {
 const {createPage} = actions;

 const { data } = await graphql(`query {
  releases:allContentfulRelease{
    edges{
      node{
        slug
      }
    }
  }
}`)
 data.releases.edges.forEach(({node})=> {
createPage({
 path:`releases/${node.slug}`,
 component:path.resolve('./src/templates/releases-template.js'),
 context:{
  slug:node.slug
 }
})
 })
}