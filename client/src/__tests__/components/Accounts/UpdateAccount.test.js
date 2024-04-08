import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UpdateAccount from '../../../components/accounts/UpdateAccount';


test('Renders UpdateAccount Component', () => {
    render(
      <BrowserRouter>
        <UpdateAccount />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });