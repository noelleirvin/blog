import React from 'react';
import Blog from './Blog';
import enzyme from 'enzyme';
import { Read } from './read/Read';
import { Posts } from './posts/Posts';
import { Route } from 'react-router-dom';
import { PostType } from '../types/PostType';

describe('Blog test', () => {

  const posts: PostType[] = [
    {
      title: 'mitchs first blog',
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

  it('should render', () => {
    const wrapper = enzyme.shallow(<Blog posts={posts}/>);
    expect(wrapper.find('.Blog')).toHaveLength(1);
  });

  it('renders header', () => {
    const wrapper = enzyme.shallow(<Blog posts={posts}/>);
    expect(wrapper.find('header'))
      .toContainEqual(<header className="Blog-header">Mitch's Blog</header>);
  });

  it('renders Posts component', () => {
    const wrapper = enzyme.shallow(<Blog posts={posts}/>);
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it('should route to posts', () => {
    const wrapper = enzyme.shallow(<Blog posts={posts}/>);

    const routes = wrapper.find(Route);

    expect(routes.at(0).exists()).toEqual(true);
    expect(routes.at(0).props().path).toEqual(posts[0].url);
    expect(routes.at(0).props().render())
      .toEqual(<Read post={posts[0]} />);

    expect(routes.at(1).exists()).toEqual(true);
    expect(routes.at(1).props().path).toEqual(posts[1].url);
    expect(routes.at(1).props().render())
      .toEqual(<Read post={posts[1]} />);

    expect(routes.at(2).exists()).toEqual(true);
    expect(routes.at(2).props().path).toEqual(undefined);
    expect(routes.at(2).props().render())
      .toEqual(<Read post={posts[0]} />);
  });

});
