import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enzyme from 'enzyme';

describe('App test', () => {

  it('should render', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('renders header', () => {
    const wrapper = enzyme.shallow(<App />);
    expect(wrapper.find('header'))
      .toContainEqual(<header>Mitch's Blog</header>);
  });

});
