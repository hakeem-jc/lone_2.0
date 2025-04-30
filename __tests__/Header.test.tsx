import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '@/app/components/Header';

describe('Header', () => {
  it('renders logo image and navigation buttons', () => {
    render(<Header />);
    expect(screen.getByAltText('Lone Logo')).toBeInTheDocument();
    expect(screen.getByText('Get started')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open main menu/i })).toBeInTheDocument();

  });

  it('hides the mobile menu by default', () => {
    render(<Header />);
    const navMenu = screen.getByRole('navigation').querySelector('#navbar-sticky');
    expect(navMenu).toHaveClass('hidden');
  });

  it('shows the mobile menu when toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /open main menu/i });

    await user.click(toggleButton);

    const navMenu = screen.getByRole('navigation').querySelector('#navbar-sticky');
    expect(navMenu).toHaveClass('flex');
  });

  it('toggles the mobile menu on double click', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /open main menu/i });

    await user.click(toggleButton); // opens
    await user.click(toggleButton); // closes

    const navMenu = screen.getByRole('navigation').querySelector('#navbar-sticky');
    expect(navMenu).toHaveClass('hidden');
  });

  it('has links to Pricing, About Us, and FAQ', () => {
    render(<Header />);
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });
});
