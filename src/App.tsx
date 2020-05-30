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

    private markdownToHtmlConverter = new Showdown.Converter();

    constructor(props: {}) {
        super(props);
        this.state = {
            posts: []
        };
        this.getPosts();
    }

    private async getPosts() {
        let posts: PostType[] = [
            {
                title: 'The Father\'s Guidance',
                subtitle: 'God is our Father. How, then, does he guide us as his children?', 
                date: new Date('May 30, 2020'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/the-fathers-guidance.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/the-fathers-guidance'
            },
            {
                title: 'Truth in the Face of Suffering',
                subtitle: 'Faced with death, or any kind of related suffering, what is the Truth that our worldview (salvation by faith in the God of the Christian bible) offers us?', 
                date: new Date('May 9, 2020'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/truth-in-the-face-of-suffering.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/truth-in-the-face-of-suffering'
            },
            {
                title: 'Being Afraid',
                subtitle: 'An exploration off the first handful of counseling sessions Noelle and I shared.', 
                date: new Date('April 20, 2020'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/being-afraid.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/being-afraid'
            },
            {
                title: 'The Investigator',
                subtitle: 'My initial response to, and processing of, Ian Cron\'s text "The Road Back to You". Specifically: chapter 9, "Type 5 - The Investigator".',
                date: new Date('Feb 24, 2020'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/the-investigator.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/the-investigator'
            },
            {
                title: 'Welcome',
                subtitle: 'What exactly is "This Good Endeavor"?',
                date: new Date('Feb 20, 2020'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/welcome.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/'
            },
            {
                title: 'What I Learned In My First Two Years as a Software Engineer',
                subtitle: 'Two stories, lessons learned, my regrets, and my goals after my first two years working as a software engineer.',
                date: new Date('Jan 17, 2019'),
                body: this.markdownToHtmlConverter.makeHtml(
                    await axios.get('./posts/what-i-learned-in-my-first-two-years.md')
                        .then(postBodiesResponse => postBodiesResponse.data)),
                url: '/what-i-learned-in-my-first-two-years'
            },
            {
                title: 'Fundamental Money',
                subtitle: 'Navigating the transition from zero financial responsibility, to stewarding a steady income.',
                date: new Date('May 20, 2019'),
                body: this.markdownToHtmlConverter.makeHtml(
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