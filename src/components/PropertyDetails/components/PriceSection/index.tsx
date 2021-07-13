import { useContext } from "react";

import { PropertyContext } from "../../../../hook/useProperty";
import { formatValues } from "../../../../utils/formatValues";

import { AiOutlineCalendar } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";

import styles from "./styles.module.scss";

export const PriceSection = () => {
  const { maxHosts, cleaningTax, guarantee } = useContext(PropertyContext);

  return (
    <div className={styles.priceContainer}>
      <div>
        <p>Máx. de hóspedes</p>
        <span className={styles.icon}>
          <HiOutlineUserGroup />
        </span>
        <span>{maxHosts}</span>
      </div>
      <div>
        <p>Taxa de limpeza</p>
        <span className={styles.icon}>
          <AiOutlineCalendar />
        </span>
        <span>{formatValues(cleaningTax)}</span>
      </div>
      <div>
        <p>Caução</p>
        <span className={styles.icon}>
          <GiReceiveMoney />
        </span>
        <span>{formatValues(guarantee)}</span>
      </div>
    </div>
  );
};
