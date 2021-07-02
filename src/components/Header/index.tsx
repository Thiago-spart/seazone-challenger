import Link from "next/link";

import { FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        Store<span>K</span>
      </div>

      <nav>
        <Link href={"/calendar/"}>
          <a type="button">Calendário</a>
        </Link>
        <Link href={"/customers/"}>
          <a type="button">Clientes</a>
        </Link>
        <Link href={"/budget/"}>
          <a type="button">Orçamento</a>
        </Link>
        <Link href={"/properties/"}>
          <a type="button">Propriedades</a>
        </Link>
        <Link href={"/control/"}>
          <a type="button">Controle</a>
        </Link>
        <button type="button" className={styles.userOptions}>
          <div>
            <FaUserAlt />
          </div>
          <div>
            <TiArrowSortedDown />
          </div>
        </button>
      </nav>
    </header>
  );
};
