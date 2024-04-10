import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Symptom1 from '../../../Pages/SymptomChecker/Symptom1';

describe('Symptom1 component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Symptom1 />
            </Router>
        );
        expect(screen.getByText("Select your pet's main symptom from the list:")).toBeInTheDocument();
});
});