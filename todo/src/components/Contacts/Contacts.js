import React from 'react';
import styles from './Contacts.module.css'


const Contacts = () => {

  return  (
    <div className={styles.wrap}>
      <header>
        <h1 className={styles.title}>Контакты</h1>
        <h3 className={styles.subtitle}>Зяброва Ольга Алексеевна</h3>
      </header>
      <span className={styles.label}>
        <img src={'/images/phone-call.png'} alt='phone' className={styles.img}/>
        <address className={styles.address}>  +7(902)929-05-47</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/yandex.png'} alt='yandex' className={styles.img}/>
        <address className={styles.address}>  olgazyabrova@yandex.ru</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/city-map-colored.png'} alt='city' className={styles.img}/>
        <address className={styles.address}>  г.Красноярск</address>
      </span>
      <span className={styles.label}>
        <img src={'/images/vk.png'} alt='vk' className={styles.img}/>
        <address className={styles.address}>
          <a href='https://vk.com/olga_zyabrova'> https://https://vk.com/olga_zyabrova</a>
        </address>
      </span>
      <span className={styles.label}>
        <img src={'/images/instagram.png'} alt='insta' className={styles.img}/>
        <address className={styles.address}>
          <a href='https://www.instagram.com/ziabrovaaa/'> https://www.instagram.com/ziabrovaaa/</a>
        </address>
      </span>
    </div>
  );
}

export default Contacts;