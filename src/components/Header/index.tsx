import { FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo-header.png" alt="seazone logo" />

      <a href="#" type="button">
        Calendário
      </a>
      <a href="#" type="button">
        Clientes
      </a>
      <a href="#" type="button">
        Orçamento
      </a>
      <a href="#" type="button">
        Propriedades
      </a>
      <a href="#" type="button">
        Controle
      </a>

      <div>
        <div>
          <FaUserAlt />
        </div>
        <div>
          <TiArrowSortedDown />
        </div>
      </div>
    </header>
  );
}
