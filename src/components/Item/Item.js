import React, {useState} from 'react';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Item = ({
  value, items, isDone, id, onClickDone, onClickDelete, onDoubleClickEdit,
  onBlurSave, index, provided, innerRef  }) => {

  const initialState = {
    items: {
       value: value
     }
   };

  const [input, setInput] = useState(initialState.items);

  return (
      <ListItem
      className={styles.wrapper}
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
        <ListItemIcon>
          <Checkbox
          edge="start"
          checked={isDone}
          tabIndex={-1}
          disableRipple
          onClick = {() => onClickDone(id)}
          />
        </ListItemIcon>
        <div>
          <button
            onClick={() => onClickDone(id)}
            className={
            classnames({
              [styles.item]: true,
              [styles.done]: isDone
            })
           }>
           {value}
      </button>
      </div>
          <div
            id="standard-full-width"
            style={{ margin: 8, width: 0 }}
            margin="normal"
            InputLabelProps={{shrink: true,}}
            className={styles.input}
            value={input.value}
            onChange={
              event => {
                setInput({
                  value: event.target.value
                });
              }
            }
            onBlur={ () => onBlurSave(id, input.value, isDone) }
            onKeyPress = {
              (event) => {
                if (event.key === 'Enter') {
                  onBlurSave(id, input.value, isDone)
                }
              }
            }
          />
        <ListItemSecondaryAction>
          <IconButton
          edge="end"
          aria-label="comments"
          onClick = {() => onClickDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  );
}

Item.propTypes = {
  deal: PropTypes.string,
  isDone: PropTypes.bool
};

export default Item;