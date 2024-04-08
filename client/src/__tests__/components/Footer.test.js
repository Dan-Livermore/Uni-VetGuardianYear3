import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../Components/Footer';


test('Renders Footer Component', () => {
  render(    
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});