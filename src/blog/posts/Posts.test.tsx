import React from 'react';
import enzyme from 'enzyme';
import { Posts } from './Posts';
import { Post } from './post/Post';

describe('Posts test', () => {

    const posts = [
        {
            title: 'Title1',
            date: new Date('December 17, 1995'),
            body: 'Lorem ipsum...'
        },
        {
            title: 'Title2',
            date: new Date('March 12, 1995'),
            body: 'Best day...'
        }
    ];

    it('should render title and posts', () => {
        const wrapper = enzyme.shallow(<Posts posts={posts} />);
        expect(wrapper.find('.title').at(0).text())
            .toEqual('Posts');
        expect(wrapper.find(Post)).toHaveLength(2);
        expect(wrapper.find(Post).at(0).prop('post'))
            .toEqual(posts[0]);
        expect(wrapper.find(Post).at(1).prop('post'))
            .toEqual(posts[1]);

    });

});