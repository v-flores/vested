import React from 'react'
import Single from './Single'
import styles from '../../css/items.module.css'


const Releases = ({ releases }) => {
 console.log(releases)
 return (
  <section className={styles.releases}>
  <h2> Releases</h2>
  <div className={styles.center}>
    {releases.map(({ node }) => {
      return <Single key={node.id} releases={node} />
    })}
  </div>
  </section>
 )
}

export default Releases
