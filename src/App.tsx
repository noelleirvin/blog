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
                title: 'What I Learned In My First Two Years as a Software Engineer',
                subtitle: 'What follows are two stories, some lessons learned, my regrets, and my goals after my first two years working as a software engineer.',
                date: new Date('Jan 17, 2019'),
                body: new Showdown.Converter().makeHtml(
                    await axios.get('./posts/what-i-learned-in-my-first-two-years.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/what-i-learned-in-my-first-two-years'
            },
            {
                title: 'Fundamental Money',
                subtitle: 'I was 21 years old when I started my first full time job. All of the sudden, I went from almost zero financial responsibility to being responsible for managing a steady income.',
                date: new Date('May 20, 2019'),
                body: new Showdown.Converter().makeHtml(
                    await axios.get('./posts/fundamental-money.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/fundamental-money'
            }
        ];
        this.setState({posts: posts});
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