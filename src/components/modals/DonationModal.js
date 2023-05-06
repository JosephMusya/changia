import styles from "./donation.module.css";
import { MdMoney, MdTimer, MdPeople } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Line } from "rc-progress";
import "react-circular-progressbar/dist/styles.css";
import { auth } from "../../config/firebase/Firebase";

import { useBudPayPayment, closeBudPayPaymentModal } from 'budpay-react-v2';

export default function DonationModal(props) {
  const iconSize = 25;
  const progress = 60;

  const email = auth.currentUser.email;
  const fName = auth.currentUser.displayName;
  console.log(fName.toString());
  const config = {
    api_key: 'sk_live_cswltnqwc2rp7dedhblxpxmuoaz880jgqmi92dz',
    reference:'c2rp7dedhblxpxmuoaz880jBUDPAY',
    email: email,
    amount: "100",
    first_name: fName.toString(),
    last_name: 'Adams',
    currency: "KES", // Use GHS for Ghana Cedis or USD for US Dollars    
  };

  const budPayConfig = {
    ...config,
    text: "Pay with BudPay",
    callback_url: "www.budpay.com",
    callback: function (response) {
      closeBudPayPaymentModal(); // this will close the modal programmatically
      // this happens after the payment is completed successfully
      alert(
        "Transaction completed\nThank you for donating" +
          response.reference +
          ", Status: " +
          response.status
      );
    },
    onClose: function (response) {
      console.log(response);
      alert("Transaction was not completed, window closed.");
    },    
  };

  const handleBudPayPayment = useBudPayPayment(budPayConfig);

  return (
    <div>
      <div className={styles.donationModal}>
        <h3>Donate - {props.title}</h3>
        <div className="divider"></div>
        <br />
        <div className={styles.info}>
          <div className={styles.content}>
            <div>
              <MdMoney size={iconSize} />
              <p>Total amount raised: Ksh:76,500</p>
            </div>
            <div>
              <FaMoneyBill size={iconSize} />
              <p>Pending Ksh:50,000</p>Payment complete! Reference:
            </div>
            <div>
              <MdTimer size={iconSize} />
              <p>Duration Left: 23 Days</p>
            </div>
            <div>
              <MdPeople size={iconSize} />
              <p>
                Total Donations: <span>65</span>
              </p>
            </div>
          </div>
          <CircularProgressbar
            className={styles.progress}
            value={progress}
            text={progress + "%"}
            styles={buildStyles({
              textSize: "0.61rem",
              textColor: "#111e30",
              pathColor: "#111e30",
            })}
          />
        </div>
        <br />
        <h4> Choose subgoals</h4>
        <div className={styles.subgoal}>
          <div>
            <input type="checkbox" />
            <Line
              className={styles.linear}
              percent={81}
              strokeWidth={4}
              strokeColor="#111e30"
              trailWidth={4}
            />
            <div>
              <p>First goal</p>
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <Line
              className={styles.linear}
              percent={51}
              strokeWidth={4}
              strokeColor="#111e30"
              trailWidth={4}
            />
            <div>
              <p>Second goal</p>
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
          </div>
        </div>
        <h4>Media Content</h4>
        <div className={styles.media}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.donate}>
          <button onClick={handleBudPayPayment}>D o n a t e</button>
          <button>S a v e</button>
        </div>
      </div>
    </div>
  );
}
