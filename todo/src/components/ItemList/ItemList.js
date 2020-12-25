import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd';

class ItemList extends React.Component {

  render() {
    const {filter, onClickDone, onClickDelete, onDoubleClickEdit, onBlurSave, onDragEnd} = this.props;
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"list"}>
        {(provided) => (
          <ul className={styles.wrap} {...provided.droppableProps} ref={provided.innerRef}>
          {filter.map((item, index) =>
            <Draggable draggableId={item.id} index={index} key={item.id} >
              {(provided) => (
              <Item
              key={item.id}
              value={item.value}
              edit={item.edit}
              isDone={item.isDone}
              id={item.id}
              provided={provided}
              innerRef={provided.innerRef}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
              onDoubleClickEdit={onDoubleClickEdit}
              onBlurSave={onBlurSave}
              index={index}
              />
            )}
            </Draggable>
          )}
          {provided.placeholder}
          </ul>
        )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default ItemList;