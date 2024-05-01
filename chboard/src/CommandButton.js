import styles from './CommandButton.module.css';

const CommandButton = (props) => {
  return (<button className={styles.CommandButton}>
          {props.name}
          </button>)
}

export default CommandButton;
