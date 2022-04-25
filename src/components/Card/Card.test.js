import { render } from '@testing-library/react';
import { GlobalContext } from '../App/app';
import Card from './Card';

const testCard = {
  title: 'test title',
  content: 'test content',
  date: '2019-05-31T05:49:46',
  status: 'todo',
};

describe('Card component test', () => {
  it('Should render a card correctly', () => {
    const { getByText } = render(
      <GlobalContext.Provider value={{ cardsState: '', setCardsState: '' }}>
        <Card {...testCard} />
      </GlobalContext.Provider>
    );
    expect(testCard.title).toEqual('test title');
    expect(getByText(/test title/i)).toBeInTheDocument();

    expect(testCard.content).toEqual('test content');
    expect(getByText(/test content/i)).toBeInTheDocument();
  });
});
