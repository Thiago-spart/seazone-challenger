import {
  TiHeartFullOutline,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import { FaCoffee } from "react-icons/fa";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>
            Store<span>K</span>
          </span>
          <span>Os melhores preços sempre</span>
        </div>
        <div className={styles.iconContainer}>
          <a href="www.google.com">
            <TiSocialLinkedin />
          </a>
          <a href="www.google.com">
            <TiSocialFacebook />
          </a>
          <a href="www.google.com">
            <CgMail />
          </a>
          <a href="www.google.com">
            <TiSocialGithub />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        Site feito com{" "}
        <span>
          <TiHeartFullOutline />
        </span>{" "}
        e muito{" "}
        <span>
          <FaCoffee />
        </span>
        .
      </div>
    </footer>
  );
};
