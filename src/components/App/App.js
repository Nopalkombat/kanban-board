import './App.css';
import StatusColumn from '../StatusColumn/StatusColumn';
import { startLocalStorage, getStorageItem } from '../../data/HandleLocalStorage';
import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

function App() {
  startLocalStorage();
  const ColumnTitles = getStorageItem('StatusColumns');
  const [cardsState, setCardsState] = useState(getStorageItem('CardData'));
  const sortedCards = cardsState.sort(({ date: date1 }, { date: date2 }) =>
    date1.localeCompare(date2)
  );
  return (
    <GlobalContext.Provider value={{ cardsState, setCardsState }}>
      <div className="App">
        <h1>Kanban board</h1>
        <div className="columns-container">
          {ColumnTitles.map((columnTitle) => {
            const cards = sortedCards.filter(
              (card) => card.status === columnTitle.title.toString().toLowerCase().replace(' ', '')
            );
            return <StatusColumn title={columnTitle.title} key={columnTitle.title} cards={cards} />;
          })}
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
