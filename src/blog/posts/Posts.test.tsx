import React from 'react';
import enzyme from 'enzyme';
import { Posts } from './Posts';
import { Post } from './post/Post';

describe('Posts test', () => {

    const posts = [
        {
            title: 'Title1',
            subtitle: 'subtitle1',
            date: new Date('December 17, 1995'),
            body: 'Lorem ipsum...',
            url: '/title1',
        },
        {
            title: 'Title2',
            subtitle: 'subtitle2',
            date: new Date('March 12, 1995'),
            body: 'Lorem ipsum...',
            url: '/title2',
        }
    ];

    it('should render title and posts', () => {
        const wrapper = enzyme.shallow(<Posts posts={posts} />);
        expect(wrapper.find(Post)).toHaveLength(2);
        expect(wrapper.find(Post).at(0).prop('post'))
            .toEqual(posts[0]);
        expect(wrapper.find(Post).at(1).prop('post'))
            .toEqual(posts[1]);
    });

});