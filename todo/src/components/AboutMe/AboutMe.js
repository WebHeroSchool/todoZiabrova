import React from 'react';
import styles from './AboutMe.module.css'


const AboutMe = () => {

  return  (
    <div className={styles.wrap}>
    <h1 className={styles.title}>Обо мне</h1>
    <span className={styles.label}>Ольга Зяброва</span>
    </div>
  );
}

export default AboutMe;