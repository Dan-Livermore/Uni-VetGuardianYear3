import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '\client\src\Components\Navbar.jsx';

describe('Navbar', () => {
  it('CICD Test', () => {
    render(<Navbar />);
    expect(true).toBe(true);
  });
});
