import React from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/arrowl.png' alt='' layout='fill' />
      <Image src='/img/arrowr.png' alt='' layout='fill' />
    </div>
  );
};

export default Featured;
