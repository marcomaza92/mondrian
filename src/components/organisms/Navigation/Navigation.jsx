import NavList, {  } from '../../molecules/NavList';

import styles from './Navigation.module.scss';

const Navigation = () => {

  return (
      <nav className={styles.navContainer}>
        <NavList /> 
      </nav>
  )
};

export default Navigation;