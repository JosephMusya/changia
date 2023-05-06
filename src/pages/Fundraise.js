import styles from './fundraise.module.css';
import placeholderImg from '../assets/placeholder.png'
import { useState } from 'react';
import DonationModal from '../components/modals/DonationModal';
// import { db } from '../config/firebase/Firebase';
export default function Fundraise(props){
    let [donateModal, setDonateModal] = useState(false);

    if (donateModal) {
        document.body.style.overflowY = "hidden"
        // document.getElementsByClassName('fundraise').style.overflow="hidden";
    } else {
        document.body.style.overflowY = "auto"
    }

    const toggleDonationModal = () => {
        setDonateModal = setDonateModal(!donateModal);
    }
    return (
        <div className={styles.fundraise}>
            <h2>{props.title}</h2>
            <img src={placeholderImg} alt={props.title} />
            <div className={styles.goal}>
                <p>Amount Raised</p>
                <p>Target Goal</p>                
            </div>
            <div>
                <p>Progress</p>
            </div>
            <div className={styles.donate}>
                <button onClick={toggleDonationModal}>D o n a t e</button>
            </div>            
            {
                donateModal?(  
                    <div>
                        <div className={styles.overlay} onClick={toggleDonationModal}></div>
                        <DonationModal title={props.title} />
                    </div>                  
                ):<div></div>
            }
        </div>            
    )
}
