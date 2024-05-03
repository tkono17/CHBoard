import React from 'react';
import styles from './ImagePanel.module.css';

function ImagePanel(props) {

  return (<div className={styles.ImagePanel}>
    <p>Image Panel</p>
    {props.data}
    </div>);

}

export default ImagePanel;
