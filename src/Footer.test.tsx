import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './components/Footer';

describe('Footer Component', () => {
  it('renders the logo, description, and all sections correctly', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Freez Logo');
    expect(logo).toBeInTheDocument();

    const description = screen.getByText('Zakazivanje termina nikada nije bilo lakše. Izaberite frizera, uslugu i vreme koje vam najviše odgovara.');
    expect(description).toBeInTheDocument();

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('About Us').closest('a')).toHaveAttribute('href', '/onama');
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/pocetna');
    expect(screen.getByText('Career').closest('a')).toHaveAttribute('href', '/pocetna');

    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Kontakt').closest('a')).toHaveAttribute('href', '/kontakt');
    expect(screen.getByText('FAQ').closest('a')).toHaveAttribute('href', '/pocetna');

    expect(screen.getByText('Get Updates')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();

    expect(screen.getByText('Instagram').closest('a')).toHaveAttribute('href', 'https://instagram.com');
    expect(screen.getByText('Twitter').closest('a')).toHaveAttribute('href', 'https://twitter.com');
    expect(screen.getByText('Facebook').closest('a')).toHaveAttribute('href', 'https://facebook.com');
  });

  it('should allow users to enter an email and click the subscribe button', () => {
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');

    const subscribeButton = screen.getByText('Subscribe');
    fireEvent.click(subscribeButton);

  });
});
