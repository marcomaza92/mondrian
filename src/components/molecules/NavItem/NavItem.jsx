import Anchor from '../../atoms/Anchor';

import styles from './NavItem.module.scss';

const NavItem = ({ url, text }) => {

  return (
    <li className={styles.navItem}>
      <Anchor url={url} text={text} />
    </li>
  )
};

export default NavItem;