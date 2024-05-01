import React from 'react';
import styles from './MainPanel.module.css';
import ImagePanel from './ImagePanel.js';

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: 'No file selected'
    }
  }

  render() {
    return (<div className={styles.MainPanel}>
              <p>File: {this.props.fileName}</p>
              <ImagePanel />
            </div>)
  }
  
};

export default MainPanel
