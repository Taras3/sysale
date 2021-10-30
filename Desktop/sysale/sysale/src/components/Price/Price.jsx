import React from 'react';
import styles from './Price.module.css'

const Price = () => {
  return (
    <div>
      <div>
          <div className={styles.someselect}>
              <div className={styles.select}>
                  <p>Цвет</p>
                  <div className={styles.arrow}></div>
              </div>
              <p>200 грн</p>
          </div>
      </div>
    </div>
  )
}

export default Price;