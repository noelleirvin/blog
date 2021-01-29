import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component<{}, {}> {
    render() {
        return (
            <footer>
                <div className="footer">
                    <Link to="/">
                        <span className="logo">TGE</span>
                    </Link>
                    <p className="copyright">Mitchell Irvin 2019</p>
                </div>
            </footer>
        )
    }
}

export { Footer };