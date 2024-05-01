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
  
  onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.currentTarget.files
    if (files && files.length === 1) {
      const file = files[0]
      this.setState({ fileName: file.name})
      console.log('Opened file ', file.name)
      console.log('App = ', this.props.app)
      this.props.app.showFile(file.name)
    }
  }

  render() {
    return (<div className={styles.CommandBox}>
              <p>Command Box</p>
              <label for="openSvg">Open SVG  : </label>
              <input type="file" id="openSvg" accept="svg"
                     onChange={this.onFileChange.bind(this)}/>
              <CommandButton name="Open" />
              <CommandButton name="Exit" />
            </div>)
  }
};

export default CommandBox;
