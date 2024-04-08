import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar';


test('Renders Navbar Component', () => {
  render(    
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});