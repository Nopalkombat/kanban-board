import App from './app';
import { render } from '@testing-library/react';

describe('Test App component', () => {
  it('should render app container', () => {
    const { getByText, getByRole } = render(<App />);
    expect(getByRole('heading', { name: 'Kanban board' })).toBeInTheDocument();
    expect(getByText(/In Progress/i)).toBeInTheDocument();
  });
});
