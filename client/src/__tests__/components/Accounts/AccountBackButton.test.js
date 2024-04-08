import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AccountBackButton from '../../../Components/Accounts/AccountBackButton';


test('Renders AccountBackButton Component', () => {
    render(
      <BrowserRouter>
        <AccountBackButton />
      </BrowserRouter>
    );
  
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });