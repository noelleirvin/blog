import React from 'react';
import { PostType } from '../types/PostType';
import { Post } from './post/Post';

interface Props {
    posts: PostType[]
}

function Posts(props: Props) {
    const postComparator = (a: PostType, b: PostType) => {
        if (a.date > b.date) {
            return 1;
        } else {
            return -1
        }
    };

    const postElements = props.posts
        .sort(postComparator)
        .map((post) => {
            return <Post key={post.title} post={post} />
        });

    return (
        <div className='posts'>
            <h5 className='title'>Posts</h5>
            {postElements}
        </div>
    );
}

export { Posts };