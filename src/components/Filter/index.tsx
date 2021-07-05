import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./styles.module.scss";

export function Filter() {
  return (
    <form className={styles.container}>
      <div className={styles.formGroup}>
        <label htmlFor="localization">Localização</label>
        <select
          id="localization"
          name="localization"
          className={styles.formLocation}
        >
          <option value="florianopolis">Florianópolis</option>
          <option value="sao-paulo">São Paulo</option>
          <option value="rio-de-janeiro">Rio de Janeiro</option>
          <option value="recife">Recife</option>
          <option value="Caruaru">caruaru</option>
          <option value="petrolina">Petrolina</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="price">Preço</label>
        <select id="price" name="price" className={styles.formPrice}>
          <option value="300-10000">300-10000</option>
          <option value="10000-15000">10000-15000</option>
          <option value="15000-20000">15000-20000</option>
          <option value="20000-25000">20000-25000</option>
          <option value="25000">25000+</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="check-in">Check-in</label>
        <input id="check-in" type="date" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="check-out">Check-out</label>
        <input id="check-out" type="date" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="GhestsNumber">N° de hóspedes</label>
        <input type="number" min="2" id="GhestsNumber" name="GhestsNumber" />
      </div>
      <div className={styles.formGroup}>
        <button type="submit">Buscar</button>
      </div>
      <div className={styles.formGroup}>
        <div className={styles.moreFilters}>+ Mais filtros</div>
      </div>
    </form>
  );
}
