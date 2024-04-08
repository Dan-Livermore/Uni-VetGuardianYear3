import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AccountBackButton from '../../../components/accounts/AccountBackButton';


test('Renders AccountBackButton Component', () => {
    render(
      <BrowserRouter>
        <AccountBackButton />
      </BrowserRouter>
    );
  
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });