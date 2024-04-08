import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReturnHomeButton from '../../../components/PageNotFound/ReturnHomeButton';


test('Renders ReturnHomeButton Component', () => {
    render(
      <BrowserRouter>
        <ReturnHomeButton />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });