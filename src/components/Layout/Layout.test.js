import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '.'


describe('PageTitle Component', () => {
    it('Return title', () => {
        const tree = renderer
            .create(<Layout/>)
            .toJSON();
        expect(tree).toMatchSnapshot();        
    })
})