import { useContext } from "react";
import { PropertyContext } from "../../../../hook/useProperty";

import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./styles.module.scss";

export const RulesSection = () => {
  const property = useContext(PropertyContext);

  return (
    <div className={styles.rules}>
      <h3>Regras</h3>
      <div className={styles.rulesContainer}>
        <div>
          <span>Aceita Crianças (de 02 até 12 anos)</span>
          <button
            type="button"
            className={property.child.ruleClass ? styles.allow : styles.deny}
          >
            {property.child.permission}
          </button>
        </div>
        <div>
          <span>Aceita Bebês (abaixo de 02)</span>
          <button
            type="button"
            className={property.baby.ruleClass ? styles.allow : styles.deny}
          >
            {property.baby.permission}
          </button>
        </div>
        <div>
          <span>Fornece Berços</span>
          <button
            type="button"
            className={property.crib.ruleClass ? styles.allow : styles.deny}
          >
            {property.crib.permission}
          </button>
        </div>
        <div>
          <span>Restrição de idade para fazer reserva</span>
          <button
            type="button"
            className={
              property.ageRestrictions.ruleClass ? styles.allow : styles.deny
            }
          >
            {property.ageRestrictions.permission}
          </button>
        </div>
        <div>
          <span>Permite fumar no quarto</span>
          <button
            type="button"
            className={
              property.allowSmokingRoom.ruleClass ? styles.allow : styles.deny
            }
          >
            {property.allowSmokingRoom.permission}
          </button>
        </div>
        <div>
          <span>Aceita animais de estimção</span>
          <button
            type="button"
            className={property.pets.ruleClass ? styles.allow : styles.deny}
          >
            {property.pets.permission}
          </button>
        </div>
        <div>
          <span>Eventos são permitidos</span>
          <button type="button" className={styles.allow}>
            Sim
          </button>
        </div>
      </div>
      <button type="button" className={styles.moreRules}>
        Mais regras <TiArrowSortedDown />
      </button>
    </div>
  );
};
