import Link from "next/link";
import { useContext } from "react";
import { PropertyContext } from "../../hook/useProperty";

import styles from "./styles.module.scss";

export const PropertyLocalization = () => {
  const {
    img,
    name,
    district,
    number,
    street,
    city,
    state,
    cep,
    geolocalization,
  } = useContext(PropertyContext);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={"/" + img} alt={name} />
      </div>

      <div className={styles.localizationDetails}>
        <h3>Localização</h3>
        <p>
          {district} {number}, {street}, {city} - {state}
        </p>
        <p>CEP {cep}</p>
        <Link href={geolocalization}>
          <a>Ver localização</a>
        </Link>
      </div>
    </div>
  );
};
