import React from 'react';
import './Blog.css';
import { Read } from './read/Read';
import { PostType } from '../types/PostType';
import { Posts } from './posts/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

interface Props {
  posts: PostType[];
}

class Blog extends React.Component<Props, {}>  {
  
  routes: JSX.Element[] = this.props.posts.map((post) => {
    return <Route key={post.title} exact path={post.url}
      render={props => <Read post={post} />} />
  })

  render() {
    return (
      <Router>
        <div className="Blog">
          <header className="Blog-header">
            This Good Endeavor
          </header>
          <div className="Blog-content">
            <Posts posts={this.props.posts} />
            <Switch>
              {this.routes}
              <Route render={props => <Read post={this.props.posts[0]} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Blog;
