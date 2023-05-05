import styles from './donation.module.css';
import {MdMoney, MdTimer,} from 'react-icons/md';
import {FaMoneyBill} from 'react-icons/fa';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DonationModal(props){
    const iconSize = 25;
    const progress = 60;
    return (
        <div>
            <div className={styles.donationModal}>
                <h3>Donate - {props.title}</h3>
                <div className="divider"></div>
                <br />
                <div className={styles.info}>                                        
                    <div className={styles.content}>
                        <div>
                            <MdMoney size={iconSize}/>
                            <p>Total amount raised: Ksh:76,500</p>
                        </div>
                        <div>
                            <FaMoneyBill size={iconSize}/>
                            <p>Pending Ksh:50,000</p>
                        </div>
                        <div>
                            <MdTimer size={iconSize}/>
                            <p>Duration Left: 23 Days</p>
                        </div>
                        <div>
                            <p>Total Donations: <span>65</span></p>
                        </div> 
                    </div>
                    <CircularProgressbar
                        className={styles.progress}
                        value={progress}
                        text={progress + '%'}
                        styles={buildStyles({
                            textSize:'0.61rem',
                            textColor:'#111e30',
                            pathColor:'#111e30'
                        })}
                    />
                </div>
                <div className={styles.subgoal}>
                    <h4> Choose subgoals</h4>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <li>Subgoal 1</li>                            
                        </div>
                        <div>
                            <input type="checkbox" />
                            <li>Subgoal 2</li>                            
                        </div>
                        <div>
                            <input type="checkbox" />
                            <li>Subgoal 3</li>                            
                        </div>
                        
                    </div>                    
                </div>
                <br />
                <div>
                    <h4>Donate with Stickers & gifts</h4>
                    <div className={styles.stickers}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>                                            
                    </div>
                </div>
                <h4>Media Content</h4>
                <div className={styles.media}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>                   
                </div>
                <div className={styles.donate}>
                    <button>D o n a t e</button> 
                    {/* <button>S a v e</button>                    */}
                </div>
            </div>         
        </div>
    )
}
