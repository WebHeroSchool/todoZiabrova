import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
    label="Текст"
    id="outlined-margin-dense"
    defaultValue="Добавить задание"
    helperText="Введите нужное Вам задание"
    margin="dense"
    variant="outlined"
  />
</div>);

export default InputItem; 