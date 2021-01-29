import React from 'react';
import { PostType} from '../../../types/PostType';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Post.css';

interface Props {
    post: PostType;
}

const scrollToTop = () => {
    window.scrollTo(0,0);
}

function Post (props: Props) {
    return (
        <Link to={props.post.url} className="link" onClick={scrollToTop}>
            <div className='post'>
                <div className='date'>{moment(props.post.date).format('MMMM Do YYYY')}</div>
                <div className='title'>{props.post.title}</div>
                <div className="subtitle">{props.post.subtitle}</div>
            </div>
        </Link>
    );
}

export { Post };