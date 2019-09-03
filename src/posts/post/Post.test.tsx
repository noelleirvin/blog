import React from 'react';
import { Post } from './Post';
import enzyme from 'enzyme';
import { PostType } from '../../types/PostType';

describe('Post test', () => {

    const post: PostType = {
        title: 'Title',
        date: 'August 31st, 2019',
        body: 'Lorem ipsum...'
    };

    it('renders something', () => {
        const wrapper = enzyme.shallow(<Post post={post} />);
        expect(wrapper.find('h3').at(0).text())
            .toEqual(post.title);
    });

});