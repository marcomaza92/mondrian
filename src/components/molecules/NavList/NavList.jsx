import NavItem from '../NavItem';

import { navContent } from '../../../api/constants';
import styles from './NavList.module.scss';

const NavList = () => {
  return (
    <ul className={styles.navList}>
      {navContent.map((item, index) => (
        <NavItem key={index} url={item.navItemUrl} text={item.navItemText} />
      ))}
    </ul>
  )
};

export default NavList;