import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src='/img/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>
            <Link href='call:8998787'>983 405 444</Link>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Link href='/'>
            <Image
              className={styles.pointer}
              src='/img/logo.png'
              alt=''
              width='160px'
              height='69px'
            />
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href='/Cart'>
            <Image src='/img/cart.png' alt='' width='30px' height='30px' />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
