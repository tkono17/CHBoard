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
      jsonFile: null,
      replayCount: 0
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
    this.setState({ jsonReplay: 0})
    console.log('In showFile after setState')
  }

  replay() {
    this.setState({ replayCount: this.state.replayCount+1 })
    console.log('Replay count: ', this.state.replayCount)
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
          <CommandBox onSvgFileChange={this.updateSvgFile.bind(this)} 
          onJsonFileChange={this.updateJsonFile.bind(this)} 
          onReplayClicked={this.replay.bind(this)} />
        </div>
        <MainPanel svgFile={this.state.svgFile} jsonFile={this.state.jsonFile} replayCount={this.state.replayCount} />
        </div>
    );
  }
};

export default App;
