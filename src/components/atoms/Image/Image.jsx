import styles from './Image.module.scss';

const Image = ({ imageUrl }) => {
  return (
    <img className={styles.image} src={imageUrl} />
  )
};

export default Image;