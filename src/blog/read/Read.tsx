import React from 'react';
import parse from 'html-react-parser';
import { PostType } from '../../types/PostType';
import moment from 'moment';
import './Read.css';

interface Props {
    post: PostType;
}

function Read (props: Props) {
    return (
        <div className='read'>
            <div className='heading'>
                <h1 className='title'>{props.post.title}</h1>
                <p className='date'>{moment(props.post.date).format('MMMM Do YYYY')}</p>
            </div>
            <p className='subtitle'>{props.post.subtitle}</p>
            <div className='body'>{parse(props.post.body)}</div>
        </div>
    );
}

export { Read };