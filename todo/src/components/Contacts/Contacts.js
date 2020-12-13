import React from 'react';
import styles from './Contacts.module.css'


const Contacts = () => {

  return  (
    <div className={styles.wrap}>
    <h1 className={styles.title}>Контакты</h1>
    <span className={styles.label}>Адрес:<address className={styles.address}> г.Красноярск</address></span>
    <span className={styles.label}>Почта:<address className={styles.address}> olgazyabrova@yandex.ru</address></span>
    </div>
  );
}

export default Contacts;