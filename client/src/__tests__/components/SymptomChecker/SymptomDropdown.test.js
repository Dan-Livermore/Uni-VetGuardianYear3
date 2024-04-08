import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SymptomDropdown from '../../../Components/SymptomChecker/SymptomDropdown';


test('Renders SymptomDropdown Component', () => {
    render(
      <BrowserRouter>
        <SymptomDropdown />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });