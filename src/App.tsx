import React from 'react';
import './App.css';
import { Read } from './read/Read';
import { PostType } from './types/PostType';
import { Posts } from './posts/Posts';

class App extends React.Component<{}, {}>  {
  post: PostType = {
    title: 'Title',
    date: 'August 31st, 2019',
    body: 'Lorem ipsum...'
  };

  posts = [
    {
      title: 'Title1',
      date: 'August 31st, 2019',
      body: 'Lorem ipsum...'
    },
    {
      title: 'Title2',
      date: 'September 23rd, 2017',
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
