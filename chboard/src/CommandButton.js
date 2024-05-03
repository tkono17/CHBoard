import styles from './CommandButton.module.css';

const CommandButton = (props) => {
  return (<button className={styles.CommandButton} onClick={props.onClick} >
          {props.name}
          </button>)
}

export default CommandButton;
