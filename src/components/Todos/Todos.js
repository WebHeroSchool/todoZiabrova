import React, {useState} from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todos.module.css'

const Todos = () => {

  const createId = () => {
    return `${Math.random().toString(36).substr(2, 9)}`;
  }

  function compare( a, b ) {
    if ( a.value < b.value ){
      return -1;
    }
    if ( a.value > b.value ){
      return 1;
    }
    return 0;
  }

  const initialState = {
    items: [{
      id: createId(),
      isDone: false,
      value: 'РАБОТА',
      edit: false
    },{
      id: createId(),
      isDone: false,
      value: 'ПРИГОТОВЛЕНИЕ УЖИНА',
      edit: false
    },{
      id: createId(),
      isDone: false,
      value: 'ЧТЕНИЕ КНИГИ',
      edit: false
    }],
    filter: 'all',
    sort: 'None'
  };

  const [items, setItems] = useState(initialState.items);
  const [filter, setFilter] = useState(initialState.filter);
  const [sort, setSort] = useState(initialState.sort);

  const onClickAdd = value => {
    const newItemList = [...items,
      {
        id: createId(),
        isDone: false,
        value: value,
        edit: false
      }
    ];
    setItems(newItemList);
  };

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item};
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onDoubleClickEdit = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.edit = true;
      }
      return newItem;
    });
    setItems(newItemList);
  }

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
  };

  const onClickSort = sorting => {
    setSort(sorting);
  }

  const onClickFilter = filtering => {
    setFilter(filtering);
  };

  const onBlurSave = (id, value, isDone) => {
    const newItemList = items.map(item => {
      const updatedItem = { ...item };
      if (item.id === id) {
        updatedItem.value = value;
        updatedItem.edit = false;
        updatedItem.isDone = isDone;
      }
      return updatedItem;
    });
    setItems(newItemList);
  };

  const onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) return;
    const newItemList = [...items];
    const [removed] = newItemList.splice(source.index, 1);
    newItemList.splice(destination.index, 0, removed);
    setItems([...newItemList]);
  };

  const onSort = () => {
    let filteringList;
    let sortingList;

    switch (filter) {
      case 'done':
        filteringList = items.filter(item => item.isDone);
        break;
      case 'active':
        filteringList = items.filter(item => !item.isDone);
        break;
      case 'all':
        filteringList = items;
        break;
      default :
        filteringList = items;
    };

    switch (sort) {
      case 'None':
        sortingList = filteringList;
        break;
      case 'A':
        sortingList = filteringList.map(item=>item);
        sortingList.sort(compare);
        break;
      case 'Z':
        sortingList = filteringList.map(item=>item);
        sortingList.sort(compare).reverse();
        break;
      default :
        sortingList = filteringList;
    }
    return sortingList;
  }

  let sortingList = onSort();

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Список дел</h1>
      <InputItem items={items} onClickAdd={onClickAdd} onClickSort={onClickSort}/>
      <ItemList
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      onDoubleClickEdit={onDoubleClickEdit}
      onBlurSave={onBlurSave}
      onDragEnd={onDragEnd}
      filter={sortingList}
      />
      <Footer
      itemNumber={sortingList.length}
      onClickFilter={onClickFilter}
      filter={filter}
      />
    </div>
  );
}

  export default Todos;