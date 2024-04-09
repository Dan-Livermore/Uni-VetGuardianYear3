import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Info1 from '../../../Pages/SymptomChecker/Info1';

describe('Info1 component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Info1 />
            </Router>
        );
        expect(screen.getByText('Dog')).toBeInTheDocument();
});
});