import React from 'react';
import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('interval'), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const {item, isDone, id, onClickDone, onClickDelete} = this.props;
    
    return (
      <ListItem>
      <ListItemIcon className={styles.wrap}>
        <Checkbox
          edge="start"
          checked={isDone}
          tabIndex={-1}
          disableRipple
          onClick={() => onClickDone(id)}
        />
      </ListItemIcon>
      <ListItemText className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
      }
        id={id}
        primary={item} />
    <ListItemSecondaryAction>
      <IconButton 
        className={styles.button} 
        edge="end" 
        aria-label="comments"
      >
      <DeleteIcon
        onClick = {() =>onClickDelete(id)}
      />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>
    );
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Item;