import React from 'react';
import './App.css';
import CommandBox from './CommandBox.js';
import MainPanel from './MainPanel.js';
import styles from './App.module.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      svgFile: null,
      jsonFile: null
    };
  }

  updateSvgFile(f) {
    console.log('Show file: ', f)
    this.setState({ svgFile: f });
    console.log('In showFile after setState')
  }

  updateJsonFile(f) {
    console.log('Show file (JSON): ', f)
    this.setState({ jsonFile: f });
    console.log('In showFile after setState')
  }

  readFileFinished() {
    this.setState({svgFile: null})
  }
  updateView() {
  }
  
  render() {
    return (
        <div className={styles.App}>
        <div className={styles.LeftPanel}>
          <CommandBox onSvgFileChange={this.updateSvgFile.bind(this)} onJsonFileChange={this.updateJsonFile.bind(this)} />
        </div>
        <MainPanel svgFile={this.state.svgFile} jsonFile={this.state.jsonFile}/>
        </div>
    );
  }
};

export default App;
