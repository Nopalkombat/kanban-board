import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GlobalContext } from '../App/app';
import CardModal from './CardModal';

const testCard = {
  title: 'test title',
  content: 'test content',
  date: '2019-05-31T05:49:46',
  status: 'todo',
};

describe('Card Modal test component', () => {
  it('should render a modal with the card info', async () => {
    const { getByText, getByRole } = render(
      <GlobalContext.Provider value={{ cardState: '', setCardState: '' }}>
        <CardModal CardDetails={testCard} />
      </GlobalContext.Provider>
    );
    const openModalLink = getByRole('link');
    userEvent.click(openModalLink);
    const expectedTitle = await waitFor(() => getByText(/test title/i));
    expect(expectedTitle).toBeInTheDocument();
  });
});
