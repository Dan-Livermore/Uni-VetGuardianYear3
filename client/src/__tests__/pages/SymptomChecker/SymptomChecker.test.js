import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SymptomChecker from '../../../Pages/SymptomChecker/SymptomChecker';

describe('SymptomChecker component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <SymptomChecker />
            </Router>
        );
        expect(screen.getByText("Symptom Suggester")).toBeInTheDocument();
});
});