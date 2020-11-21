import styles from './Item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Item = ({item, isDone, id, onClickDone}) => (
  <ListItem>
  <ListItemIcon>
    <Checkbox
      edge="start"
      checked={isDone}
      tabIndex={-1}
      onClick={() => onClickDone(isDone)}
      disableRipple
    />
  </ListItemIcon>
  <ListItemText id={id} primary={item} />
  <ListItemSecondaryAction>
    <IconButton edge="end" aria-label="comments">
      <DeleteIcon />
    </IconButton>
  </ListItemSecondaryAction>
</ListItem>
);

export default Item;