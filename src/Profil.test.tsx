import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Profil from './components/Profil';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));


jest.mock('./components/Navbar', () => () => <div>Mock Navbar</div>);
jest.mock('./components/Footer', () => () => <div>Mock Footer</div>);


beforeEach(() => {
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => {
    if (key === 'loggedInUser') {
      return JSON.stringify({
        ime: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
      });
    }
    return null;
  });

  jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {});
});

describe('Profil Component', () => {
  it('renders Navbar and Footer components', () => {
    render(<Profil />);

    expect(screen.getByText('Mock Navbar')).toBeInTheDocument();
    expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  });

  it('renders user profile information correctly', () => {
    render(<Profil />);

    expect(screen.getByText('Ime:')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
  });
});