import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/Navbar';
// import '@testing-library/jest-dom/extend-expect';
// The rest of your test code follows

import { BrowserRouter } from 'react-router-dom';

test('always true', () => {
  render(    
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
  );
  expect(true).toBe(true);
});

test('renders Navbar component', () => {
  render(    
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});