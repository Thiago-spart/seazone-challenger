import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

import { api } from "../services/api";

interface Address {
	daily: number;
	city: string;
	state: string;
	street: string;
	district: string;
	number: string;
	cep: string;
	geolocalization: string;
}

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
	address: Address;
	rules: [{ name: string; isAllow: boolean }];
	amenities: [{ name: string; isAllow: boolean }];
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
