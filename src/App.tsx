import React from 'react';
import './App.css';
import { Read } from './read/Read';
import { PostType } from './types/PostType';
import { Posts } from './posts/Posts';

class App extends React.Component<{}, {}>  {
  post: PostType = {
    title: 'Title',
    date: new Date('December 17, 1995'),
    body: 'Lorem ipsum...'
  };

  posts: PostType[] = [
    {
      title: 'Title1',
      date: new Date('December 17, 1995'),
      body: 'Lorem ipsum...'
    },
    {
      title: 'Title2',
      date: new Date('March 12, 1995'),
      body: 'Best day...'
    }
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Mitch's Blog
        </header>
        <Posts posts={this.posts} />
        <Read post={this.post} />
      </div>
    );
  }
}

export default App;
