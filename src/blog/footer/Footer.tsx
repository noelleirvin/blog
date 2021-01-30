import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component<{}, {}> {
    render() {
        return (
            <footer>
                <div className="footer">
                    <p className="copyright">Copyright © 2019 Mitchell Irvin</p>
                </div>
            </footer>
        )
    }
}

export { Footer };