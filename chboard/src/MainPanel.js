import React from 'react';
import styles from './MainPanel.module.css';
import ImagePanel from './ImagePanel.js';

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: 'No file selected', 
      file: null, 
      updateRequest: false
    }
  }

  render() {
    //const svg = (<svg xlmns="http://www.w3c.org/2000/svg" viewBox="-100 -100 200 200"
    //  width="500px" >
    //  <rect x="-20" y="-20" width="80" height="50" stroke="blue" fill="pink" />
    //</svg>)
    var file = null
    //this.props.app.readFileFinished()

    var fn = ''
    if (this.props.file) {
      console.log('MainPanel.render: ', this.props.file.name)
      fn = this.props.file.name
      if (fn !== this.state.fileName) {
        this.setState({fileName: fn})
        file = this.props.file
      }
    }

    console.log('MainPanel f=', file)

    return (<div className={styles.MainPanel}>
              <p>File: {fn}</p> <br/>
              <ImagePanel file={file}/>
            </div>)
  }
  
};

export default MainPanel
