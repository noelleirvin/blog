import React from 'react';
import Blog from './blog/Blog';
import { PostType } from './types/PostType';
import Showdown from 'showdown';
import './App.css';

function App() {

    const posts: PostType[] = [
        {
            title: 'mitchs first blog',
            date: new Date('December 17, 1995'),
            body: new Showdown.Converter().makeHtml('# Lorem ipsum...'),
            url: '/mitchs-first-blog'
        },
        {
            title: 'title is',
            date: new Date('March 12, 1995'),
            body: new Showdown.Converter().makeHtml('# Lorem ipsum...'),
            url: '/title-is'
        }
    ];
    
    return (
        <div className="App">
            <Blog posts={posts}/>
        </div>
    );
}

export { App };