import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('HelloWorld', () => {
  it('renders a message', () => {
    render(<Navbar />);
    const messageElement = screen.getByText(/hello world/i);
    expect(messageElement).toBeInTheDocument();
  });
});
