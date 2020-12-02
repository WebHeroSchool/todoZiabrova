import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
  item: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;