import React from 'react'
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import Footer from '.'

describe('Footer Component', () => {
    it('Search for linkdin link', () => {
        render(<Footer/>)
        screen.getByRole('link', {name: /linkedin/i})
    })

    it('Search for github link', () => {
        render(<Footer/>)
       screen.getByRole('link', {name: /github/i})
    })

    it('Snapshot Footer', () => {
        const tree = renderer
            .create(<Footer/>)
            .toJSON();
        expect(tree).toMatchSnapshot();        
    })
})