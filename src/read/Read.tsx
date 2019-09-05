import React from 'react';
import { PostType } from '../types/PostType';
import moment from 'moment';

interface Props {
    post: PostType;
}

function Read (props: Props) {
    return (
        <div className='read'>
            <h3 className='title'>{props.post.title}</h3>
            <p className='date'>{moment(props.post.date).format('MMMM Do YYYY')}</p>
            <p className='body'>{props.post.body}</p>
        </div>
    );
}

export { Read };