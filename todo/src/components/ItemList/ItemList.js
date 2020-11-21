import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<ul>
  {items.map(item =>
    <Item 
    key={item.id} 
    item={item.value} 
    isDone={item.isDone} 
    onClickDone={onClickDone} 
    />
  )}
</ul>);

export default ItemList;