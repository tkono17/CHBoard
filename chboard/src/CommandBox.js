import React from 'react';
import styles from './CommandBox.module.css';
import CommandButton from './CommandButton.js';

class CommandBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      fileName: ''
    }
  }
  
  onSvgFileChange(event) {
    const files = event.currentTarget.files
    if (files && files.length === 1) {
      const file = files[0]
      console.log('Opened file ', file.name)
      this.props.onSvgFileChange(file)
    }
  }

  onJsonFileChange(event) {
    const files = event.currentTarget.files
    if (files && files.length === 1) {
      const file = files[0]
      console.log('Opened file ', file.name)
      this.props.onJsonFileChange(file)
    }
  }

  render() {
    return (<div className={styles.CommandBox}>
              <p>Command Box</p>
              <label>Open SVG  : 
              <input type="file" id="openSvg" accept=".svg"
                     onChange={this.onSvgFileChange.bind(this)}/>
              </label><br />
              <label>Open JSON  : 
                <input type="file" id="openJson" accept=".json"
                onChange={this.onJsonFileChange.bind(this)} />
              </label>
              <br />
              <CommandButton name="Open" />
              <CommandButton name="Exit" />
            </div>)
  }
};

export default CommandBox;
