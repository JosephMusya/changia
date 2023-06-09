import styles from "./navbar.module.css";
import profilePic from "../assets/profile_photo.png";
import { FaPlus, FaMoneyBill, FaBell, FaTrophy, FaStar } from "react-icons/fa";
import {
  MdSettings,
  MdBook,
  MdHelpCenter,
  MdArrowBack,
  MdGroup,
} from "react-icons/md";
import {auth} from '../config/firebase/Firebase';
import {signOut,} from 'firebase/auth';
import { AuthContext } from "../providers/LoginProvider";
import { useContext, setState } from "react";

export default function Navbar() {
    const user = useContext(AuthContext);
        
    const logoutUser = async () => {
      try{
        await signOut(auth)
      } catch (error){
        console.log(error)
      }
    }
  
    return (
    user?    
    <nav>
      <div className={styles.logo}>
        <h1> Bud-Changa </h1>{" "}
      </div>{" "}
      <div className={styles.profile}>
        <div className={styles.photoBox}>
          <img src={user.photoURL} alt="Profile cover" />
        </div>{" "}
        <div className={styles.credentials}>
          <p> {auth.currentUser.displayName} </p> <p> Donations Made: 53 </p>{" "}
        </div>{" "}
      </div>
      <div className={styles.navElements}>
        <div>
          <FaPlus />
          <li> Start Campaign </li>{" "}
        </div>{" "}
        <div>
          <FaMoneyBill />
          <li> Recharge </li>{" "}
        </div>{" "}
        <div>
          <FaBell />
          <li> Notification </li>
        </div>
        <div>
          <MdGroup />
          <li> Backer community </li>
        </div>
        <div className="divider"> </div>
        <div>
          <FaStar />
          <li> Review & Rating </li>
        </div>
        <div>
          <MdSettings />
          <li> Privacy & settings </li>
        </div>
        <div>
          <MdBook />
          <li> Terms & Policies </li>
        </div>
        <div>
          <MdHelpCenter />
          <li> Support </li>
        </div>
        <div className="divider"></div>
        <div onClick={logoutUser}>
          <MdArrowBack />
          <li> Logout </li>
        </div>
      </div>
    </nav>:
    null
  );
}
