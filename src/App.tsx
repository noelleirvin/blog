import React from 'react';
import './App.css';
import { Read } from './read/Read';
import { PostType } from './types/PostType';
import { Posts } from './posts/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { spinalCase } from './util/StringUtil';

class App extends React.Component<{}, {}>  {
  post: PostType = {
    title: 'Title',
    date: new Date('December 17, 1995'),
    body: 'Lorem ipsum...'
  };

  posts: PostType[] = [
    {
      title: 'mitch"s first blog',
      date: new Date('December 17, 1995'),
      body: 'Lorem ipsum...'
    },
    {
      title: 'title is',
      date: new Date('March 12, 1995'),
      body: 'Best day...'
    }
  ];

  routes: JSX.Element[] = this.posts.map((post) => {
    return <Route key={post.title} exact path={'/' + spinalCase(post.title)}
      render={props => <Read post={post} />} />
  })

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Mitch's Blog
          </header>
          <Posts posts={this.posts} />
          <Switch>
            {this.routes}
            <Route render={props => <Read post={this.post} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
