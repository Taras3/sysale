import React from 'react';
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
         <div className={styles.new}>
             <p>New</p>
         </div>
         <div className={styles.image} id="image">
             
         </div>
         <div className={styles.lytlimg}>
             
         </div>

      </div>
    </div>
  )
}

export default Banner;