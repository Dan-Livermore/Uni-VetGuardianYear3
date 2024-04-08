import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DeleteAccount from '../../../components/accounts/DeleteAccount';


test('Renders DeleteAccount Component', () => {
    render(
      <BrowserRouter>
        <DeleteAccount />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });