import React from 'react';
import './App.css';
import CommandBox from './CommandBox.js';
import MainPanel from './MainPanel.js';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      file: '',
    };
  }

  showFile(f) {
    console.log('Show file: ', f)
    this.setState({ file: f });
    console.log('In showFile after setState')
  }

  readFileFinished() {
    this.setState({file: null})
  }
  updateView() {
    this.setState({
      updateRequest: true
    })
  }
  
  render() {
    return (
        <div className={styles.App}>
        <div className={styles.LeftPanel}>
        <CommandBox app={this}/>
        </div>
        <MainPanel file={this.state.file} />
        </div>
    );
  }
};

export default App;
