import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Info2 from '../../../Pages/SymptomChecker/Info2';

describe('Info2 component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Info2 />
            </Router>
        );
        expect(screen.getByText('Age:')).toBeInTheDocument();
});
});