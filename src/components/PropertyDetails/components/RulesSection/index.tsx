import { useContext } from "react";
import { PropertyContext } from "../../../../hook/useProperty";

import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./styles.module.scss";

export const RulesSection = () => {
	const { rules } = useContext(PropertyContext);

	return (
		<div className={styles.rules}>
			<h3>Regras</h3>
			<div className={styles.rulesContainer}>
				{rules.map((rule) => {
					return (
						<div key={rule.name}>
							<span>{rule.name}</span>
							<button
								type="button"
								className={rule.isAllow ? styles.allow : styles.deny}
							>
								{rule.isAllow ? "sim" : "não"}
							</button>
						</div>
					);
				})}
			</div>
			<button type="button" className={styles.moreRules}>
				Mais regras <TiArrowSortedDown />
			</button>
		</div>
	);
};
