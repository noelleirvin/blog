import React from 'react';
import './Blog.css';
import { PostType } from '../types/PostType';
import { Posts } from './posts/Posts';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Read } from './read/Read';

interface Props {
  posts: PostType[]
}

class Blog extends React.Component<Props, {}>  {

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
              {this.props.posts.map((post) => {
                return <Route key={post.title} exact path={post.url}
                    render={props => <Read post={post} />} />
                })}
              <Route key="Redirect" render={props => <Redirect to="/"/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Blog;
