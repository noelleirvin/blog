import React from 'react';
import { PostType} from '../../types/PostType';

interface Props {
    post: PostType;
}

function Post (props: Props) {
    return (
        <div className='post'>
            <h3>{props.post.title}</h3>
        </div>
    );
}

export { Post };