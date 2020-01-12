import React from 'react'
import { FaCompactDisc } from "react-icons/fa";
import Image from 'gatsby-image'
import styles from '../../css/releases.module.css'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

const Single = ({releases}) => {
 const {name, artist,slug, images } = releases
 const mainImage = images[0].fluid;
 return <article className={styles.releases}>
 <div className={styles.imgContainer}>
   <Image fluid={mainImage} className={styles.img} alt={name}/>
   <Link className={styles.link} to={`/releases/${slug}`}>
   More Info
   </Link>
   </div>
   <div className={styles.footer}>
    <h3>{name}</h3>
    <div className={styles.info}>
    <h4 className={styles.country}>
    <FaCompactDisc className={styles.icon}>
    </FaCompactDisc>
    </h4>
    <div className={styles.details}>
     <h6>{artist}</h6>
     </div>
    </div>
    </div>
 </article>
}

Single.propTypes = {
  releases:PropTypes.shape({ 
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
 }),
}
export  default Single