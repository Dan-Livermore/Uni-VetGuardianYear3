import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Symptom2 from '../../../Pages/SymptomChecker/Symptom2';

describe('Symptom2 component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Symptom2 />
            </Router>
        );
        expect(screen.getByText("Has your pet had a change in energy levels?")).toBeInTheDocument();
});
});