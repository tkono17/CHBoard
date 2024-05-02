import React from 'react';
import styles from './ImagePanel.module.css';

class ImagePanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      svgContents: ''
    }
    this.svgContents = ''
  }

  onLoad(event) {
    const contents = event.target.result
    console.log('SVG contents in onload:', contents)
    this.setState({svgContents: contents})
  }

  render() {
    if (this.props.file) {
      var reader = new FileReader();
      reader.onload = this.onLoad.bind(this);
      reader.onerror = (event) => { PromiseRejectionEvent(event);}
      reader.readAsText(this.props.file)
    }

    return (<div className={styles.ImagePanel}>
      <p>Image Panel</p>
      {this.state.svgContents}
      </div>);
  }

}

export default ImagePanel;
