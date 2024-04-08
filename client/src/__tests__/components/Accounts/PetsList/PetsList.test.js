import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PetsList from '../../../../Components/Accounts/PetsList/PetsList';


test('Renders PetsList Component', () => {
    render(
      <BrowserRouter>
        <PetsList />
      </BrowserRouter>
    );
  
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
});
