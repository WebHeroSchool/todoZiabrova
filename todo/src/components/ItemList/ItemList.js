import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import classnames from 'classnames';

const ItemList = ({items, onClickDone, onClickDelete}) => (<ul className ={
  classnames ({
    [styles.list]: true
  })
}>
  {items.map(item =>
  <Item
  key={item.id}
  item={item.value}
  isDone={item.isDone}
  id={item.id}
  onClickDone={onClickDone}
  onClickDelete={onClickDelete}
  />
)}
</ul>
);

export default ItemList;