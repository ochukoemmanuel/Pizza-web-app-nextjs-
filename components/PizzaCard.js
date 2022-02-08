import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Link href='/product/1'>
        <Image src='/img/pizza.png' alt='' width='500' height='500' />
      </Link>
      <Link href='/product/1'>
        <h1 className={styles.title}>Fiora pizza</h1>
      </Link>
      <Link href='/product/1'>
        <span className={styles.price}>$19.9</span>
      </Link>
      <Link href='/product/1'>
        <p className={styles.dec}>Lorem ipsum fhdff df dg dgdg dggdgd.</p>
      </Link>
    </div>
  );
};

export default PizzaCard;
