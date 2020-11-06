import Link from 'next/link'

import styles from './Anchor.module.scss';

const Anchor = ({ url, text }) => {

  return (
    <Link href={url}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
};

export default Anchor;