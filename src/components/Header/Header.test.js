import React from 'react'
import {render, screen} from '@testing-library/react'
import Header from '.'

describe('Header Component', () => {
    it('Search site logo', () => {
        render(<Header/>)
        screen.getByRole('img', {name: /PalpiteBox/i})
    })
})