import styles from './ImagePanel.module.css';

const ImagePanel = (props) => {
  return (<div className={styles.ImagePanel}>
    <p>Image Panel</p>
    
    <svg xmlns="<http://www.w3.org/2000/svg>" width="500px" viewBox="-100 -100 200 200"
    background-color="white" border="1">
    <circle
    cx="0"
    cy="0"
    r="30"
    stroke="black"
    strokeWidth="1"
    fill="red" />
    <rect x="-10" y="20" width="60" height="40" stroke="blue"  fill="none"/>
    </svg>
    </div>);
}
  
export default ImagePanel;
  