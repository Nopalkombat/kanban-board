import './App.css';
import StatusColumn from '../StatusColumn/StatusColumn';
import ColumnTitles from '../../data/StatusColumns';

function App() {
  return (
    <div className="App">
      <h1>ABER BRO</h1>
      <div className="columns-container"></div>
      {ColumnTitles.map((columnTitle) => (
        <StatusColumn title={columnTitle.title} key={columnTitle.title} />
      ))}
    </div>
  );
}

export default App;
