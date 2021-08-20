import { render, screen } from '@testing-library/react';
import VestNav from '../VestNav';
import MOCK_API_RESPONSE from '../../../mockApiResponse';

test('renders award types', () => {
  render(<VestNav data={MOCK_API_RESPONSE}/>);
  const awardElement = screen.getByText(/ES-204/i);
  expect(awardElement).toBeInTheDocument();
});
