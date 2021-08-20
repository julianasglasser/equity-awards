import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const appTestId = screen.getByTestId('app');
  expect(appTestId).toBeInTheDocument();
});
