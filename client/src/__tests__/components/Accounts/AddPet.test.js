import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddPet from '../../../Components/accounts/AddPet';


test('Renders AddPet Component', () => {
    render(
      <BrowserRouter>
        <AddPet />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });