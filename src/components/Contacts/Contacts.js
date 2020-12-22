import React from 'react';
import styles from './Contacts.module.css'


const Contacts = () => {

  return  (
    <div className={styles.wrap}>
      <header>
        <h1 className={styles.title}>Контакты</h1>
        <h3 className={styles.subtitle}>Зяброва Ольга Алексеевна</h3>
        <h4 className={styles.decs}>Frontend-developer</h4>
      </header>
      <span className={styles.label}>
        <img src={'/images/phone-call.svg'} alt='phone' className={styles.img}/>
        <address className={styles.address}>  +7(902)929-05-47</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/envelope.svg'} alt='mail' className={styles.img}/>
        <address className={styles.address}>  olgazyabrova@yandex.ru</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/placeholder.svg'} alt='city' className={styles.img}/>
        <address className={styles.address}>  г.Красноярск</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/paper-plane.svg'} alt='tg' className={styles.img}/>
        <div className={styles.address}>@ziabrovaa</div>
      </span>
    </div>
  );
}

export default Contacts;