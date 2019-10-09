import React from 'react';
import { PostType } from '../../types/PostType';
import { Post } from './post/Post';
import './Posts.css';

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

    const postElements: JSX.Element[] = props.posts
        .sort(postComparator)
        .map((post) => {
            return <Post key={post.title} post={post} />
        });

    return (
        <div className='posts'>
            {postElements}
        </div>
    );
}

export { Posts };