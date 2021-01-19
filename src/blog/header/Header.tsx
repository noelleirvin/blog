import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './blog-logo.png';

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <header>
                <div className="header-home">
                    <Link to="/">
                        <span className="header-logo">TGE</span>
                        <span className="header-title">This Good Endeavor</span>
                    </Link>
                </div>
            </header>
        )
    }
}

export { Header };