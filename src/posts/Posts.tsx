import React from 'react';
import { Post } from '../types/Post';

interface Props {
    posts: Post[]
}

function Posts(props: Props) {
    return (
        <div className='posts'>
            <h5 className='title'>Posts</h5>
        </div>
    );
}

export { Posts };