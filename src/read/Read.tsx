import React from 'react';
import { PostType } from '../types/PostType';

interface Props {
    post: PostType;
}

function Read (props: Props) {
    return (
        <div className='read'>
            <h3 className='title'>{props.post.title}</h3>
            <p className='date'>{props.post.date}</p>
            <p className='body'>{props.post.body}</p>
        </div>
    );
}

export { Read };