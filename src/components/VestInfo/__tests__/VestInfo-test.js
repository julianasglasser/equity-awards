import { render, screen } from '@testing-library/react';
import VestInfo from '../VestInfo';
import MOCK_API_RESPONSE from '../../../mockApiResponse';

test('renders vesting manager name', () => {
  render(<VestInfo props={MOCK_API_RESPONSE[0]}/>);
  const nameElement = screen.getByText(/1\/16, quarterly, 1yr cliff/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders table header', () => {
  render(<VestInfo props={MOCK_API_RESPONSE[0]}/>);
  const headerElement = screen.getByText(/Vesting Date/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders dates in correct format', () => {
  render(<VestInfo props={MOCK_API_RESPONSE[0]}/>);
  const dateElement = screen.getByText(/December 22 2018/i);
  expect(dateElement).toBeInTheDocument();
});

test('renders amounts in correct format', () => {
  render(<VestInfo props={MOCK_API_RESPONSE[0]}/>);
  const amountElement = screen.getByText(/1,500/i);
  expect(amountElement).toBeInTheDocument();
});
