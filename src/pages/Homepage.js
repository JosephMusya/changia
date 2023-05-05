import styles from './homepage.module.css';
import Fundraise from './Fundraise';
export default function Home(){        
    return (
        <div className={styles.home}>
            <div className={styles.topic}>
                <h1>Fundraising Campaigns - Quick & Transparent</h1>
            </div>
            <div className={styles.fundraise}>
                <Fundraise title='Childrens home fundraise' />
                <Fundraise title='Wedding fundraise' />
                <Fundraise title='Fees drive for John'/>
                <Fundraise title='ACK St Peters church construction' />
                <Fundraise title='Std 6 class construction'/>
            </div>
        </div>
    )
}
