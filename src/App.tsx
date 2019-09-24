import React from 'react';
import Blog from './blog/Blog';
import { PostType } from './types/PostType';
import './App.css';

function App() {

    const posts: PostType[] = [
        {
            title: 'mitch"s first blog',
            date: new Date('December 17, 1995'),
            body: 'Lorem ipsum...',
            url: '/mitchs-first-blog'
        },
        {
            title: 'title is',
            date: new Date('March 12, 1995'),
            body: 'Best day...',
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