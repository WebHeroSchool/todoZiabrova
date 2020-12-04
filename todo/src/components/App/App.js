import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        id: this.createId(),
        isDone: false,
        value: 'Работа'
      },
      {
        id: this.createId(),
        isDone: false,
        value: 'Приготовление ужина'
      },
      {
        id: this.createId(),
        isDone: false,
        value: 'Чтение книги'
      }
    ]
  };

  createId() {
    return `${Math.random().toString(36).substr(2,9)}`
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value: value,
        isDone: false,
        id: this.createId()
      }
    ]
  }));

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

  onClickDelete = id => this.setState(state => ({
    items: state.items.filter(item => item.id !== id)
 }));

  render() {
    return  (
      <div className={styles.wrap}>
      <h1 className={styles.title}>TODOs</h1>
      <InputItem onClickAdd={this.onClickAdd} />
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
