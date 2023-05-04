import styles from './fundraise.module.css';
import placeholderImg from '../assets/placeholder.png'
export default function Fundraise(props){
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
                <button>D o n a t e</button>
            </div>
        </div>            
    )
}
