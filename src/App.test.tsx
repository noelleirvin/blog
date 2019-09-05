import React from 'react';
import App from './App';
import enzyme from 'enzyme';
import { Read } from './read/Read';
import { Posts } from './posts/Posts';
import { Route } from 'react-router-dom';
import { PostType } from './types/PostType';

describe('App test', () => {
  const post: PostType = {
    title: 'Title',
    date: new Date('December 17, 1995'),
    body: 'Lorem ipsum...'
  };

  const posts: PostType[] = [
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

  it('should render', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('renders header', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('header'))
      .toContainEqual(<header className="App-header">Mitch's Blog</header>);
  });

  it('renders Posts component', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it('should route to stuff', () => {
    const wrapper = enzyme.shallow(<App />);

    const routes = wrapper.find(Route);

    expect(routes.at(0).exists()).toEqual(true);
    expect(routes.at(0).props().path).toEqual("/mitch\"s-first-blog");
    expect(routes.at(0).props().render())
      .toEqual(<Read post={posts[0]} />);

    expect(routes.at(1).exists()).toEqual(true);
    expect(routes.at(1).props().path).toEqual("/title-is");
    expect(routes.at(1).props().render())
      .toEqual(<Read post={posts[1]} />);

    expect(routes.at(2).exists()).toEqual(true);
    expect(routes.at(2).props().path).toEqual(undefined);
    expect(routes.at(2).props().render())
      .toEqual(<Read post={post} />);
  });

});
