import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ classNames, text, href}) => {
  return (
    <div>
      <Link
        href={href}
        style={{  }}
        className={`${classNames} ${styles.btn} ${styles.btnWhite}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
