import React from 'react';
import { PostType } from '../types/PostType';
import { Post } from './post/Post';

interface Props {
    posts: PostType[]
}

function Posts(props: Props) {
    const postElements = props.posts.map((post) => {
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