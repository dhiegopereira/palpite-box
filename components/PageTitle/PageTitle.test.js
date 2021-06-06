import React from 'react';
import renderer from 'react-test-renderer';
import PageTitle from '.'


describe('PageTitle Component', () => {
    it('Return title', () => {
        const tree = renderer
            .create(<PageTitle title="Diego"></PageTitle>)
            .toJSON();
        expect(tree).toMatchSnapshot();        
    })
})