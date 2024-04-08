import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BackButton from '../../../Components/DBInfo/BackButton';


test('Renders BackButton Component', () => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });