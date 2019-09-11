import React from 'react';
import enzyme from 'enzyme';
import { App } from './App';
import Blog from './blog/Blog';

describe('App test', () => {

    it('render Blog and pass posts', () => {
        const wrapper = enzyme.shallow(<App />);

        const blog = wrapper.find(Blog);

        expect(blog).toHaveLength(1);
    });

});