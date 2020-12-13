import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
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
          <MenuList style={{display: 'inline-block', verticalAlign: 'top'}}>
            <Link to='/' className={styles.link}>
              <MenuItem style={{fontSize: '18px'}}>
                Дела
              </MenuItem>
            </Link>
            <Link to='/contacts' className={styles.link}>
              <MenuItem style={{fontSize: '18px'}}>
                Контакты
              </MenuItem>
            </Link>
            <Link to='/aboutme' className={styles.link}>
              <MenuItem style={{fontSize: '18px'}}>
                Обо мне
              </MenuItem>
            </Link>
          </MenuList>
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