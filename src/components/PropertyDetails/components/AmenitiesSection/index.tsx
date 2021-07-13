import { useContext } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { PropertyContext } from "../../../../hook/useProperty";
import styles from "./styles.module.scss";

export const AmenitiesSection = () => {
  const property = useContext(PropertyContext);

  return (
    <div className={styles.amenities}>
      <h3>Comodidades</h3>
      <div className={styles.amenitiesContainer}>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Estacionamento
          </span>
          <button
            type="button"
            className={property.parking.ruleClass ? styles.allow : styles.deny}
          >
            {property.parking.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Elevador
          </span>
          <button
            type="button"
            className={property.elevator.ruleClass ? styles.allow : styles.deny}
          >
            {property.elevator.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Porteiro
          </span>
          <button
            type="button"
            className={property.doorman.ruleClass ? styles.allow : styles.deny}
          >
            {property.doorman.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Piscina Privada
          </span>
          <button
            type="button"
            className={
              property.privatePool.ruleClass ? styles.allow : styles.deny
            }
          >
            {property.privatePool.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Internet
          </span>
          <button
            type="button"
            className={property.internet.ruleClass ? styles.allow : styles.deny}
          >
            {property.internet.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Wi-fi
          </span>
          <button
            type="button"
            className={property.wifi.ruleClass ? styles.allow : styles.deny}
          >
            {property.wifi.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            Ar-condicionado
          </span>
          <button
            type="button"
            className={
              property.airConditioner.ruleClass ? styles.allow : styles.deny
            }
          >
            {property.airConditioner.permission}
          </button>
        </div>
        <div>
          <span>
            <span className={styles.miniBall}>
              <BsFillCircleFill />
            </span>{" "}
            TV
          </span>
          <button
            type="button"
            className={property.tv.ruleClass ? styles.allow : styles.deny}
          >
            {property.tv.permission}
          </button>
        </div>
      </div>
    </div>
  );
};
