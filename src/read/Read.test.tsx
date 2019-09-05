import React from 'react';
import enzyme from 'enzyme';
import { Read } from './Read';
import { PostType } from '../types/PostType'
import moment from 'moment';

describe('Read test', () => {

    const post: PostType = {
        title: 'Title',
        date: new Date('December 17, 1995'),
        body: 'Lorem ipsum...'
    };

    it('should render title, date, and body', () => {
        const wrapper = enzyme.shallow(<Read post={post} />);
        expect(wrapper.find('.title').at(0).text())
            .toEqual(post.title);
        expect(wrapper.find('.date').at(0).text())
            .toEqual(moment(post.date).format('MMMM Do YYYY'));
        expect(wrapper.find('.body').at(0).text())
            .toEqual(post.body);
    });

});