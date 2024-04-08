import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LogOut from '../../../Components/accounts/LogOut';


test('Renders LogOut Component', () => {
    render(
      <BrowserRouter>
        <LogOut />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
