import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImageClassifier from '../../Pages/ImageClassifier';

describe('ImageClassifier component', () => {
  test('Renders page without crashing', () => {
    render(
      <Router>
        <ImageClassifier />
      </Router>
    );
    const headingElement = screen.getByText(/Pet Identifier/i);
    expect(headingElement).toBeInTheDocument();
  });
});