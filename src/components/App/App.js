import './App.css';
import StatusColumn from '../StatusColumn/StatusColumn';

function App() {
  return (
    <div className="App">
      <h1>ABER BRO</h1>
      <div className="columns-container">
        {/* change this shit */}
        <StatusColumn />
        <StatusColumn />
        <StatusColumn />
        <StatusColumn />
        {/* change this shit */}
      </div>
    </div>
  );
}

export default App;
