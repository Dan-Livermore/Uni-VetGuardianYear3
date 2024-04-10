import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import New from '../../../Pages/SymptomChecker/New';

describe('New component', () => {
    test('Renders page without crashing', () => {
        render(
            <Router>
                <New />
            </Router>
        );
        expect(screen.getByText('New')).toBeInTheDocument();
});
});