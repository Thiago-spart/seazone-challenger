import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

interface Property {
  id: string;
  name: string;
  room: number;
  bedroom: number;
  bathroom: number;
  status: boolean;
  maxHosts: number;
  cleaningTax: number;
  guarantee: number;
  daily: number;
  city: string;
  state: string;
  street: string;
  district: string;
  number: string;
  cep: string;
  geolocalization: string;
  child: {
    permission: string;
    ruleClass: string;
  };
  baby: {
    permission: string;
    ruleClass: string;
  };
  crib: {
    permission: string;
    ruleClass: string;
  };
  ageRestrictions: {
    permission: string;
    ruleClass: string;
  };
  allowSmokingRoom: {
    permission: string;
    ruleClass: string;
  };
  pets: {
    permission: string;
    ruleClass: string;
  };
  event: {
    permission: string;
    ruleClass: string;
  };
  parking: {
    permission: string;
    ruleClass: string;
  };
  elevator: {
    permission: string;
    ruleClass: string;
  };
  doorman: {
    permission: string;
    ruleClass: string;
  };
  privatePool: {
    permission: string;
    ruleClass: string;
  };
  internet: {
    permission: string;
    ruleClass: string;
  };
  wifi: {
    permission: string;
    ruleClass: string;
  };
  airConditioner: {
    permission: string;
    ruleClass: string;
  };
  tv: {
    permission: string;
    ruleClass: string;
  };
  img: string;
}

// interface PropertyProviderProps {
//   children: ReactNode;
// }

export const PropertyContext = createContext<Property>({} as Property);

// export const PropertyProvider = ({ children }: PropertyProviderProps) => {
//   const [property, setProperty] = useState<Property>();

//   useEffect(() => {
//     api
// 			.get(`/properties/${slug}`)
// 			.then(response => setProperty(response.data.properties));
//   }, []);

//   return (
//     <PropertyContext.Provider value={property}>
//       {children}
//     </PropertyContext.Provider>
//   );
// };

// export function useTransaction() {
//   const context = useContext(PropertyContext);

//   return context;
// }
