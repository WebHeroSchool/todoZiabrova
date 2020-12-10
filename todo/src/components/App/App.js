import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {

  const createId = () => {
    return `${Math.random().toString(36).substr(2,9)}`
  };

  const [items, setItems] = useState(
    [
      {
        id: createId(),
        isDone: false,
        value: 'Работа'
      },
      {
        id: createId(),
        isDone: false,
        value: 'Приготовление ужина'
      },
      {
        id: createId(),
        isDone: false,
        value: 'Чтение книги'
      }
    ]
  );

  useEffect(() => {console.log('componentDidMount')}, []);
  useEffect(() => {console.log('componentDidUpdate')}, [items]);

  const onClickAdd = value => {
    const newItemList = [...items,
      {
        id: createId(),
        isDone: false,
        value: value
      }
    ];
    setItems(newItemList);
  };

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = {...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
  };

  return  (
    <div className={styles.wrap}>
    <h1 className={styles.title}>TODOs</h1>
    <InputItem onClickAdd={onClickAdd} />
    <ItemList 
      items={items} 
      onClickDone={onClickDone}
      onClickDelete={onClickDelete} 
      />
    <Footer itemNumber ={items.length} />
    </div>
  );
}

export default App;
