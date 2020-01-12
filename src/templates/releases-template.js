import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaUserAlt, FaCompactDisc,FaCalendarDay } from 'react-icons/fa'
import {Link} from 'gatsby'

const ReleasesTemplate = ({data}) => {
 const {
  name,
  artist,
  catalog,
  releasedate,
  description:{ description },
  images,
  tracklist
 } = data.releases

 return(
  <Layout>
   <section className={styles.template}>
   <div className={styles.center}>
    <div className={styles.images}>
     {images.map((item,index)=> {
      return <Image key={index} fluid={item.fluid} alt={catalog} className=
      {styles.image}/>
     })}
    </div>
    <h2>{name}</h2>
    <div className={styles.info}>
     <ul className={styles.tab}>
      <li className={styles.tab}><FaCompactDisc className={styles.icon}>
      </FaCompactDisc>
        {catalog}
      </li>
       <li className={styles.tab}><FaCalendarDay className={styles.icon}>
       </FaCalendarDay>
      {releasedate}
      </li>
      <li className={styles.tab}>
       <FaUserAlt className={styles.icon} />
       {artist}
      </li>
      </ul>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tracklist}>
      {tracklist.map((item, index) => {
       return <li key={index}>{item.track}</li>
      })}
       </ul>
       <Link to="/releases">Return</Link>
    </div>
    </section>
  </Layout>
  )
}

export const query = graphql`
query($slug:String!) {
  releases: contentfulRelease(slug:{eq:$slug}) {
    name
    artist
    catalog
    releasedate
    images {
      resize(width: 250, height: 250) {
      width
      height
      }
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    description {
      description
    }
    tracklist {
      track
    }
  }
}
`
export default ReleasesTemplate
