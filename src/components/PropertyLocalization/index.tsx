import Link from "next/link";
import { useContext } from "react";
import { PropertyContext } from "../../hook/useProperty";

import styles from "./styles.module.scss";

export const PropertyLocalization = () => {
	const { img, name, address } = useContext(PropertyContext);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={"/" + img} alt={name} />
			</div>

			<div className={styles.localizationDetails}>
				<h3>Localização</h3>
				<p>
					{address.district} {address.number}, {address.street}, {address.city}{" "}
					- {address.state}
				</p>
				<p>CEP {address.cep}</p>
				<Link href={address.geolocalization}>
					<a>Ver localização</a>
				</Link>
			</div>
		</div>
	);
};
