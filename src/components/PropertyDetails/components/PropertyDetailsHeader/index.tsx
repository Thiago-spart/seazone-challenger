import React, { useContext } from "react";
import { PropertyContext } from "../../../../hook/useProperty";

import { BsFillCircleFill } from "react-icons/bs";

import styles from "./styles.module.scss";

export const PropertyDetailsHeader = () => {
	const { name, address, room, bedroom, bathroom } =
		useContext(PropertyContext);

	return (
		<>
			<div className={styles.titleHeader}>
				<h2>{name}</h2>
				<p>
					{address.street}, {address.city}
				</p>
			</div>
			<div className={styles.titleBody}>
				<span>
					{room} quartos . {bedroom} camas . {bathroom} banheiros
				</span>
				<div className={styles.status}>
					<BsFillCircleFill />
					<span>ativo</span>
				</div>
			</div>
		</>
	);
};
