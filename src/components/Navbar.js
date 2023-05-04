import styles from './navbar.module.css';
export default function Navbar(){
    return (
        <nav>
            <div className={styles.logo}>
                <strong>TMM Writers</strong>
            </div>
            <div className={styles.navElements}>
                <li>Add Order</li>                
                <li>Add Writer</li>
                <li>Notification</li>
                <li>Profile</li>
            </div>
        </nav>
    )
}
