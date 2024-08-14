"use client";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>Nutberry Dashboard</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} className="chat" />
          <MdNotifications size={20} className="bell" />
          <MdPublic size={20} className="public" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;