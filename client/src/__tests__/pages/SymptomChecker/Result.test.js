import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Result from '../../../Pages/SymptomChecker/Result';

describe('Result component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Result />
            </Router>
        );
        expect(screen.getByText('Illness Prediction')).toBeInTheDocument();
});
});