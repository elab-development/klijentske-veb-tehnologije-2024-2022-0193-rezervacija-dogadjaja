import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './components/Navbar';

describe('Navbar component', () => {
  it('renders the logo and all navigation links correctly', () => {
    const { getByAltText, getByText } = render(<Navbar />);

    expect(getByAltText('Freez Logo')).toBeInTheDocument();

    expect(getByText('Muški')).toBeInTheDocument();
    expect(getByText('Ženski')).toBeInTheDocument();
    expect(getByText('Proizvodi')).toBeInTheDocument();
    expect(getByText('Profil')).toBeInTheDocument();
    expect(getByText('Korpa')).toBeInTheDocument();
  });

  it('contains correct href attributes for each link', () => {
    const { getByText } = render(<Navbar />);

    expect(getByText('Muški').closest('a')).toHaveAttribute('href', '/muski');
    expect(getByText('Ženski').closest('a')).toHaveAttribute('href', '/zenski');
    expect(getByText('Proizvodi').closest('a')).toHaveAttribute('href', '/pocetna');
    expect(getByText('Profil').closest('a')).toHaveAttribute('href', '/profil');
    expect(getByText('Korpa').closest('a')).toHaveAttribute('href', '/termini');
  });
});