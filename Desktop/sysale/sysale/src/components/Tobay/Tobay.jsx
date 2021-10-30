import React from 'react';
import styles from './Tobay.module.css'

const Tobay = () => {
  return (
    <div>
      <div className={styles.tobay}>
          <div className={styles.add}>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          
          <button className={styles.someinput}>
              Купить
          </button>
      </div>
    </div>
  )
}

export default Tobay;