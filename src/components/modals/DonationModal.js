import styles from "./donation.module.css";
import { MdMoney, MdTimer, MdPeople } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Line } from "rc-progress";
import "react-circular-progressbar/dist/styles.css";
import { auth } from "../../config/firebase/Firebase";
import { useBudPayPayment, closeBudPayPaymentModal } from "budpay-react-v2";
import cap from "../../assets/stickers/cap.jpg";
import dog from "../../assets/stickers/dog.png";
import eagle from "../../assets/stickers/eagle.png";
import hi from "../../assets/stickers/hi.png";
import car from "../../assets/stickers/car.png";
import lion from "../../assets/stickers/lion.png";
import love from "../../assets/stickers/love.jpg";
import rose from "../../assets/stickers/rose.png";
import trophy from "../../assets/stickers/trophy.png";
import sukuma from "../../assets/sukuma.jpg";
import chicken from "../../assets/chicken.jpg";
export default function DonationModal(props) {
  const iconSize = 25;
  const progress = 60;
  let totalCoins = 0;
  let totalAmount = 0;
  const [inputAmount, setInputAmount] = useState(0);
  const [stickerCoin, setCoins] = useState(0);
  const [mediaCoins, setMediaCoins] = useState(0);
  totalCoins = stickerCoin + mediaCoins;
  console.log(totalCoins);
  const email = auth.currentUser.email;
  const fName = auth.currentUser.displayName;
  console.log(fName.toString());

  totalAmount = parseInt(totalCoins / 10) + parseInt(inputAmount);

  const config = {
    api_key: "sk_live_cswltnqwc2rp7dedhblxpxmuoaz880jgqmi92dz",
    reference: "c2rp7dedhblxpxmuoaz880jBUDPAY",
    email: email,
    amount: "100",
    first_name: fName.toString(),
    last_name: "250Adams",
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
  const refNo = Math.random().toString(5);
  console.log(refNo);
  const donate = () => {
    console.log("Initializing...");
    const token = "sk_live_cswltnqwc2rp7dedhblxpxmuoaz880jgqmi92dz";
    const endpoint = "https://api.budpay.com/api/v2/transaction/initialize";

    fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "bostoneochieng@gmail.com",
        amount: "90",
        currency: "KES",
        reference: "2rp7dedpphblxjjpxmuoafjfjoo80jgqmtui" + refNo,
        callback: "www.budpay.com",
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data.data["authorization_url"]);
        if (totalAmount > 0) {
          window.open(data.data["authorization_url"]);
        } else {
          alert("No amount");
        }
      });
    });
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
            <div>
              <img onClick={(e) => setCoins(250)} src={lion} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>250</p>
              </div>
            </div>
            <div>
              <div>
                <img src={cap} onClick={(e) => setCoins(100)} alt="" />
              </div>
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>100</p>
              </div>
            </div>
            <div>
              <img src={eagle} onClick={(e) => setCoins(70)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>70</p>
              </div>
            </div>
            <div>
              <img src={car} onClick={(e) => setCoins(80)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>80</p>
              </div>
            </div>
            <div>
              <img src={dog} onClick={(e) => setCoins(100)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>100</p>
              </div>
            </div>
            <div>
              <img src={rose} onClick={(e) => setCoins(20)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>20</p>
              </div>
            </div>
            <div>
              <img src={trophy} onClick={(e) => setCoins(300)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>300</p>
              </div>
            </div>
            <div>
              <img src={hi} onClick={(e) => setCoins(10)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>10</p>
              </div>
            </div>
            <div>
              <img src={love} onClick={(e) => setCoins(50)} alt="" />
              <div>
                <FaCoins
                  style={{
                    color: "gold",
                  }}
                />
                <p>50</p>
              </div>
            </div>
          </div>
        </div>
        <h4>Media Content</h4>
        <div className={styles.media}>
          <div onClick={(e) => setMediaCoins(2000)}>
            <img src={sukuma} alt="" />
            <button
              style={{
                color: "gold",
                fontSize: "1.2rem",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <FaCoins size={20} />
              2000
            </button>
          </div>
          <div onClick={(e) => setMediaCoins(1000)}>
            <img src={chicken} alt="" />
            <button
              style={{
                color: "gold",
                fontSize: "1.2rem",
                backgroundColor: "white",
                border: "none",
              }}
            >
              <FaCoins size={20} />
              1000
            </button>
          </div>
        </div>
        <br />
        <br />
        <div>
          <p>Enter Amount (Ksh)</p>
          <input
            style={{
              backgroundColor: "#111e30",
              border: "none",
              padding: "1rem",
              color: "white",
              fontSize: "larger",
            }}
            type="number"
            min={1}
            max={1000000}
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </div>
        <br />
        <div className={styles.donate}>
          <button
            style={{
              backgroundColor: "gold",
              fontSize: "large",
            }}
          >
            ksh:{totalAmount}
          </button>
          <button onClick={donate}>D o n a t e</button>
          <button>S a v e</button>
        </div>
      </div>
    </div>
  );
}
