import React from 'react';
import { PostType} from '../../../types/PostType';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Post.css';

interface Props {
    post: PostType;
}

function Post (props: Props) {
    return (
        <div className='post'>
            <Link to={props.post.url} className='title'>{props.post.title}</Link>
            <div className="subtitle">This is a subtitle that needs to be changed later.</div>
            <div className='date'>{moment(props.post.date).format('MMMM Do YYYY')}</div>
        </div>
    );
}

export { Post };