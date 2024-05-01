import React from 'react';
import './App.css';
import CommandBox from './CommandBox.js';
import MainPanel from './MainPanel.js';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fileName: ''
    };
  }

  showFile(fn) {
    this.setState({ fileName: fn });
  }
  
  render() {
    return (
        <div className={styles.App}>
        <div className={styles.LeftPanel}>
        <CommandBox app={this}/>
        </div>
        <MainPanel fileName={this.state.fileName} />
        </div>
    );
  }
};

export default App;
