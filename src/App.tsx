import React from 'react';
import './App.css';
import { Read } from './read/Read';

class App extends React.Component<{}, {}>  {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Mitch's Blog
        </header>
        <Read />
      </div>
    );
  }
}

export default App;
