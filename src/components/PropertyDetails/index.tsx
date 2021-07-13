import { AmenitiesSection } from "./components/AmenitiesSection";
import { BedSection } from "./components/BedSection";
import { PriceSection } from "./components/PriceSection";
import { PropertyDetailsHeader } from "./components/PropertyDetailsHeader";
import { RulesSection } from "./components/RulesSection";

import styles from "./styles.module.scss";

export const PropertyDetails = () => {
  return (
    <div className={styles.container}>
      <PropertyDetailsHeader />
      <PriceSection />
      <BedSection />
      <RulesSection />
      <AmenitiesSection />
    </div>
  );
};
