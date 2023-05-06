import styles from "./homepage.module.css";
import Fundraise from "./Fundraise";
import {auth} from '../config/firebase/Firebase';
import { AuthContext } from "../providers/LoginProvider";
import { useContext } from "react";
import Login from "./Login";

export default function Home() {
  // const user = auth.currentUser;
  // console.log(user)
  const user = useContext(AuthContext);

  return (
    user?
    <div className={styles.home}>
      <div className={styles.topic}>
        <h1>Fundraising Campaigns - Quick & Transparent</h1>
      </div>
      <div className={styles.fundraise}>
        <Fundraise title="Childrens home fundraise" />
        <Fundraise title="Wedding fundraise" />
        <Fundraise title="Fees drive for John" />
        <Fundraise title="ACK St Peters church construction" />
      </div>
    </div>:
    <Login/>
  );
}
