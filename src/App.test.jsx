import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

it('Should render the header', () => {

    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    screen.getAllByAltText('Alchemy Logo');



});

