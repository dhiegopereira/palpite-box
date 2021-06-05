import React from 'react'
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import Header from '.'

describe('Header Component', () => {
    it('Search site logo', () => {
        render(<Header/>)
        screen.getByRole('img', {name: /PalpiteBox/i})
    })

    it('Snapshot Header', () => {
        const tree = renderer
            .create(<Header/>)
            .toJSON();
        expect(tree).toMatchSnapshot();        
    })
})