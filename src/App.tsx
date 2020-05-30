import React from 'react';
import Blog from './blog/Blog';
import { PostType } from './types/PostType';
import Showdown from 'showdown';
import './App.css';
import axios from 'axios';
import update from 'immutability-helper';

interface AppState {
    posts: PostType[]
}

class App extends React.Component<{}, AppState> {

    private markdownToHtmlConverter = new Showdown.Converter();

    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [
                {
                    title: 'The Father\'s Guidance',
                    subtitle: 'God is our Father. How, then, does he guide us as his children?', 
                    date: new Date('May 30, 2020'),
                    body: "",
                    url: '/the-fathers-guidance'
                },
                {
                    title: 'Truth in the Face of Suffering',
                    subtitle: 'Faced with death, or any kind of related suffering, what is the Truth that our worldview (salvation by faith in the God of the Christian bible) offers us?', 
                    date: new Date('May 9, 2020'),
                    body: "",
                    url: '/truth-in-the-face-of-suffering'
                },
                {
                    title: 'Being Afraid',
                    subtitle: 'An exploration off the first handful of counseling sessions Noelle and I shared.', 
                    date: new Date('April 20, 2020'),
                    body: "",
                    url: '/being-afraid'
                },
                {
                    title: 'The Investigator',
                    subtitle: 'My initial response to, and processing of, Ian Cron\'s text "The Road Back to You". Specifically: chapter 9, "Type 5 - The Investigator".',
                    date: new Date('Feb 24, 2020'),
                    body: "",
                    url: '/the-investigator'
                },
                {
                    title: 'Welcome',
                    subtitle: 'What exactly is "This Good Endeavor"?',
                    date: new Date('Feb 20, 2020'),
                    body: "",
                    url: '/'
                },
                {
                    title: 'What I Learned In My First Two Years as a Software Engineer',
                    subtitle: 'Two stories, lessons learned, my regrets, and my goals after my first two years working as a software engineer.',
                    date: new Date('Jan 17, 2019'),
                    body: "",
                    url: '/what-i-learned-in-my-first-two-years'
                },
                {
                    title: 'Fundamental Money',
                    subtitle: 'Navigating the transition from zero financial responsibility, to stewarding a steady income.',
                    date: new Date('May 20, 2019'),
                    body: "",
                    url: '/fundamental-money'
                }
            ]
        };
        this.getPosts();
    }

    private getPosts() {
        this.state.posts.forEach((post, index) => {
            const postFileName = this.getPostFileName(post);
            axios.get(postFileName)
                .then(postBodiesResponse => {
                    post.body = this.markdownToHtmlConverter.makeHtml(postBodiesResponse.data);
                    this.setState(update(
                        this.state, 
                        { posts: { [index]: { $set: post } } }
                    ));
                });
        });
    }

    private getPostFileName(post: PostType): string {
        const prefix = "./posts";
        const suffix = ".md";
        if (post.url === "/") {
            return prefix + "/welcome" + suffix;
        }
        return prefix + post.url + suffix;
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