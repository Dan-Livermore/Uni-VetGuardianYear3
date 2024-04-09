import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from '../../Pages/PageNotFound';

describe('PageNotFound component', () => {
  test('Renders page without crashing', () => {
    render(
      <Router>
        <PageNotFound />
      </Router>
    );
    const headingElement = screen.getByText(/OH NO! PAGE NOT FOUND!/i);
    expect(headingElement).toBeInTheDocument();
  });
});