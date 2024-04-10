import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Symptom3 from '../../../Pages/SymptomChecker/Symptom3';

describe('Symptom3 component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <Symptom3 />
            </Router>
        );
        expect(screen.getByText("Has your pet experienced any changes in appetite or water consumption recently?")).toBeInTheDocument();
});
});