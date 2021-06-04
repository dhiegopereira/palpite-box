import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react'
import PageTitle from './PageTitle'


describe('PageTitle Component', () => {
    it('Return title', () => {
        const tree = renderer
            .create(<PageTitle title="Diego"></PageTitle>)
            .toJSON();
        expect(tree).toMatchSnapshot();        
    })
})