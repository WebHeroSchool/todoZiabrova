import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul>
  {items.map(item =>
    <Item key={item.id} item={item.value} isDone={item.isDone} />
  )}
</ul>);

export default ItemList;