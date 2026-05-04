import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Little Lemon/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
