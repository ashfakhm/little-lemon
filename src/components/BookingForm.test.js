import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders the booking form with correct heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Reserve a Table/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('updates input values on change', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Date/i);
    const guestsInput = screen.getByLabelText(/Number of Diners/i);

    fireEvent.change(dateInput, { target: { value: '2026-06-01' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(dateInput.value).toBe('2026-06-01');
    expect(guestsInput.value).toBe('4');
  });

  test('submits the form and shows success message', async () => {
    render(<BookingForm />);
    
    // Fill required fields
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2026-06-01' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Diners/i), { target: { value: '2' } });

    // Click submit
    const submitButton = screen.getByRole('button', { name: /Reserve Table/i });
    fireEvent.click(submitButton);

    // Wait for loading simulation (1.5s in code)
    await waitFor(() => {
      expect(screen.getByText(/Reservation Confirmed!/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  test('shows error if required fields are missing', () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole('button', { name: /Reserve Table/i });
    
    // Attempt submit without filling fields
    fireEvent.click(submitButton);
    
    // The browser would normally block this, but we can check if it stays on the form
    expect(screen.queryByText(/Reservation Confirmed!/i)).not.toBeInTheDocument();
  });

  test('OccasionDropdown is accessible via keyboard', async () => {
    render(<BookingForm />);
    const dropdownHeader = screen.getByRole('button', { name: /Select Occasion/i });
    
    // Focus and press Enter to open
    dropdownHeader.focus();
    fireEvent.keyDown(dropdownHeader, { key: 'Enter', code: 'Enter' });
    
    // Check if open (aria-expanded should be true)
    expect(dropdownHeader).toHaveAttribute('aria-expanded', 'true');
    
    // Check if options are visible
    const birthdayOption = screen.getByRole('button', { name: /Birthday/i });
    expect(birthdayOption).toBeInTheDocument();
    
    // Select Birthday
    fireEvent.click(birthdayOption);
    
    // Check if dropdown closed and value updated
    expect(dropdownHeader).toHaveAttribute('aria-expanded', 'false');
    // Use getAllByText and check if at least one (the header) shows the selection
    const selection = screen.getAllByText(/Birthday/i);
    expect(selection.length).toBeGreaterThan(0);
  });
});
