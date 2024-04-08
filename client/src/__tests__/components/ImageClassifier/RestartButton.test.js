import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RestartButton from '../../../components/ImageClassifier/RestartButton';

test('Renders RestartButton Component', () => {
    render(
      <BrowserRouter>
        <RestartButton />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});
