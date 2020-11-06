import styles from './Text.module.scss';

const Text = ({ quoteText }) => {
  return (
    <h3 className={styles.text}>{quoteText}</h3>
  )
};

export default Text;