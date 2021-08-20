import { render, screen } from '@testing-library/react';
import App from './App';

test('renders table header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Vesting Date/i);
  expect(headerElement).toBeInTheDocument();
});
