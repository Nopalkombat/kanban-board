import './App.css';
import StatusColumn from '../StatusColumn/StatusColumn';
import { handleLocalStorage, getStorageItem } from '../../data/HandleLocalStorage';

function App() {
  handleLocalStorage();
  const ColumnTitles = getStorageItem('StatusColumns');
  return (
    <div className="App">
      <h1>ABER BRO</h1>
      <div className="columns-container">
        {ColumnTitles.map((columnTitle) => (
          <StatusColumn title={columnTitle.title} key={columnTitle.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
