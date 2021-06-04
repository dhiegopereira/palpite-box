import React from 'react'
import {render, screen} from '@testing-library/react'
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
})