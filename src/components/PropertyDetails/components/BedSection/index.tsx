import { BsFillCircleFill } from "react-icons/bs";

import styles from "./styles.module.scss";

export const BedSection = () => {
  return (
    <div className={styles.bedDetails}>
      <h3>Camas</h3>
      <div className={styles.bedContainer}>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            1 cama de casal:
          </span>
          <span className={styles.quantBed}>duplo</span>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            1 sofá/cama:
          </span>
          <span className={styles.quantBed}>sala/área comum</span>
        </div>
      </div>
    </div>
  );
};
