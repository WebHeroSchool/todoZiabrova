import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types';

class ItemList extends React.Component {

  render() {
    const {items, onClickDone, onClickDelete} = this.props;
    return (<ul className ={styles.list}>
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
  }
}

ItemList.propTypes = {
  item: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;