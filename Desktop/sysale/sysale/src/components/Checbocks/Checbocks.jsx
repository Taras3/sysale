import React from 'react';
import styles from './Checkbox.module.css'

const Checbocks = () => {
  return (
    <div>
      <div className={styles.check}>
        <div className={styles.elementwrapper}>
          <input type="radio" className={styles.radio} name="radio" id="radio1" checked/>
          <label htmlFor="radio1">100 мл</label>
        </div>

        <div className={styles.elementwrapper}>
          <input type="radio" className={styles.radio} name="radio" id="radio2" />
          <label htmlFor="radio2">200 мл</label>
        </div>
        <div className={styles.elementwrapper}>
          <input type="radio" className={styles.radio} name="radio" id="radio3" />
          <label htmlFor="radio3">300 мл</label>
        </div>
      </div>
    </div>
  )
}

export default Checbocks;