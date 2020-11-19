import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const items = [{
  id: 1,
  isDone: true,
  value: 'Работа'
},{
  id: 2,
  isDone: false,
  value: 'Приготовление ужина'
},{
  id: 3,
  isDone: true,
  value: 'Чтение книги'
}];

const itemNumber = items.length;

const App = () => (<div className={styles.wrap}>
  <h1 className={styles.title}>TODOs</h1>
  <InputItem />
  <ItemList items={items}/>
  <Footer itemNumber={itemNumber}/>
  </div>
);

export default App;
