import React from 'react';
import { PostType} from '../../types/PostType';

interface Props {
    post: PostType;
}

function Post (props: Props) {
    return (
        <div className='post'>
            <h3 className='title'>{props.post.title}</h3>
            <p className='date'>{props.post.date.getDate()}</p>
        </div>
    );
}

export { Post };