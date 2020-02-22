import React from 'react';
import Blog from './blog/Blog';
import { PostType } from './types/PostType';
import Showdown from 'showdown';
import './App.css';
import axios from 'axios';

interface AppState {
    posts: PostType[]
}

class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            posts: []
        };
        this.getPosts();
    }

    async getPosts() {
        let posts: PostType[] = [
            {
                title: 'Welcome',
                subtitle: 'What exactly is "This Good Endeavor"?',
                date: new Date('Feb 20, 2020'),
                body: new Showdown.Converter().makeHtml(
                    await axios.get('./posts/welcome.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/'
            },
            {
                title: 'What I Learned In My First Two Years as a Software Engineer',
                subtitle: 'Two stories, lessons learned, my regrets, and my goals after my first two years working as a software engineer.',
                date: new Date('Jan 17, 2019'),
                body: new Showdown.Converter().makeHtml(
                    await axios.get('./posts/what-i-learned-in-my-first-two-years.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/what-i-learned-in-my-first-two-years'
            },
            {
                title: 'Fundamental Money',
                subtitle: 'Navigating the transition from zero financial responsibility, to stewarding a steady income.',
                date: new Date('May 20, 2019'),
                body: new Showdown.Converter().makeHtml(
                    await axios.get('./posts/fundamental-money.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/fundamental-money'
            }
        ];
        this.setState({posts});
    }

    render() {
        return (
            <div className="App">
                <Blog posts={this.state.posts}/>
            </div>
        );
    }
}

export { App };