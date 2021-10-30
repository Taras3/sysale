import React from 'react';
import Banner from '../Banner/Banner';
import Checbocks from '../Checbocks/Checbocks';
import Price from '../Price/Price';
import Text from '../Text/Text';
import Tobay from '../Tobay/Tobay';
import styles from './Blockitems.module.css'

const Blockitem1 = () => {
  return (
    <div>
      <div className={styles.item} id="item">
          <Banner />
          <Text />
          <Price />
          <Checbocks />
          <Tobay />

      </div>
    </div>
  )
}

export default Blockitem1;