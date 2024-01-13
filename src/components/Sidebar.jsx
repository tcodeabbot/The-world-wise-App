import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
        {/* THE OUTLET COMPONENT HELPS TO DISPLAY THE COMPONENTS OF THE CHILD COMPONENT */}
            <Outlet />
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copyright {new Date().getFullYear()} by Abbot
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;
