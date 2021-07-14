import { useContext } from "react";
import { BsFillCircleFill } from "react-icons/bs";

import { PropertyContext } from "../../../../hook/useProperty";

import styles from "./styles.module.scss";

export const AmenitiesSection = () => {
	const { amenities } = useContext(PropertyContext);
	return (
		<div className={styles.amenities}>
			<h3>Comodidades</h3>
			<div className={styles.amenitiesContainer}>
				{amenities.map((amenity) => {
					return (
						<div key={amenity.name}>
							<span>
								<span className={styles.miniBall}>
									<BsFillCircleFill />
								</span>{" "}
								{amenity.name}
							</span>
							<button
								type="button"
								className={amenity.isAllow ? styles.allow : styles.deny}
							>
								{amenity.isAllow ? "sim" : "não"}
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};
