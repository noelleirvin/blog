import React from 'react';
import './Footer.css';

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