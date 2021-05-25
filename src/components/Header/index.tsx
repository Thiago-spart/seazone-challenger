import { FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Filter } from "./components/Filter";
import Link from "next/link";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src="/logo-header.png" alt="seazone logo" />
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

        <div>
          <div>
            <FaUserAlt />
          </div>
          <div>
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
      <>
        <Filter />
      </>
    </header>
  );
}
