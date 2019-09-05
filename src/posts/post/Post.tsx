import React from 'react';
import { PostType} from '../../types/PostType';
import moment from 'moment';
import { Link } from 'react-router-dom';

interface Props {
    post: PostType;
}

function Post (props: Props) {
    return (
        <div className='post'>
            <h2 className='title'>{props.post.title}</h2>
            <p className='date'>{moment(props.post.date).format('MMMM Do YYYY')}</p>
        </div>
    );
}

export { Post };