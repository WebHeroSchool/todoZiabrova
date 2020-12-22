import React from 'react';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Todos from '../Todos/Todos';
import styles from './App.module.css';

const App = () => {

  return(
    <BrowserRouter>
      <div className={styles.wrap}>
        <Card className={styles.sidebar}>
          <MenuList className={styles.menu}>
            <Link to='/' className={styles.link} activeClassName={styles.active}>
                Дела
            </Link>
            <Link to='/contacts' className={styles.link} activeClassName={styles.active}>
                Контакты
            </Link>
            <Link to='/aboutme' className={styles.link} activeClassName={styles.active}>
                Обо мне
            </Link>
          </MenuList>
          <div className={styles.footer}>
            <p className={styles.text}>разработано в</p>
            <img className={styles.img} src={'/images/logo.png'} alt='school' />
          </div>
        </Card>

        <Card className={styles.content}>
          <Route path='/' exact component={Todos} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/aboutme' component={AboutMe} />
        </Card>
      </div>
    </BrowserRouter>
  );
}

export default App;