import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon brand', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const brandElements = screen.getAllByText(/Little Lemon/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
