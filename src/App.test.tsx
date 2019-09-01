import React from 'react';
import App from './App';
import enzyme from 'enzyme';
import { Read } from './read/Read';

describe('App test', () => {

  it('should render', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('renders header', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('header'))
      .toContainEqual(<header className="App-header">Mitch's Blog</header>);
  });

  it('renders Read component', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find(Read)).toHaveLength(1);
  });

  // it('renders Post component', () => {
  //   const wrapper = enzyme.shallow(<App />);
  //   expect(wrapper.find(Post)).toHaveLength(1);
  // });

});
