import React from 'react';
import { PostType } from '../../types/PostType';
import { Post } from './post/Post';
import './Posts.css';

interface Props {
    posts: PostType[]
}

function Posts(props: Props) {
    const postElements: JSX.Element[] = props.posts
        .map((post) => {
            return <Post key={post.title} post={post} />
        });

    return (
        <div className='posts'>
            <div className='postsHeading'>What to Read Next</div>
            {postElements}
        </div>
    );
}

export { Posts };