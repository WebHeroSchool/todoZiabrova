import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        isDone: true,
        value: 'Работа'
      },
      {
        id: 2,
        isDone: false,
        value: 'Приготовление ужина'
      },
      {
        id: 3,
        isDone: true,
        value: 'Чтение книги'
      }],
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);

    this.setState({items: newItemList});
  };

  render() {
    return  (
      <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem />
      <ItemList 
        items={this.state.items} 
        onClickDone={this.onClickDone}
        onClickDelete={this.onClickDelete} 
        />
      <Footer itemNumber ={this.state.items.length} />
      </div>
    );
  }
}

export default App;
