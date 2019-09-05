import React from 'react';
import { Post } from './Post';
import enzyme from 'enzyme';
import { PostType } from '../../types/PostType';
import moment from 'moment';

describe('Post test', () => {

    const post: PostType = {
        title: 'Title',
        date: new Date('December 17, 1995'),
        body: 'Lorem ipsum...'
    };

    it('renders title and date', () => {
        const wrapper = enzyme.shallow(<Post post={post} />);
        expect(wrapper.find('.title').at(0).text())
            .toEqual(post.title);
        expect(wrapper.find('.date').at(0).text())
            .toEqual(moment(post.date).format('MMMM Do YYYY'));
    });

});