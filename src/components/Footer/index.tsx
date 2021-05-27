import {
  TiHeartFullOutline,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import { FaCoffee } from "react-icons/fa";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.imgContainer}>
          <img src="/seazone-footer-image.png" alt="seazone logo" />
        </div>
        <div className={styles.iconContainer}>
          <div>
            <TiSocialLinkedin />
          </div>
          <div>
            <TiSocialFacebook />
          </div>
          <div>
            <CgMail />
          </div>
          <div>
            <TiSocialGithub />
          </div>
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
}
