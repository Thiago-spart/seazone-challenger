import { PropertyContext } from "../../../hook/useProperty";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

import { api } from "../../../services/api";
import { PropertyLocalization } from "../../../components/PropertyLocalization";
import { PropertyDetails } from "../../../components/PropertyDetails";

import { RiArrowRightSLine } from "react-icons/ri";

import styles from "./property.module.scss";

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

interface HomeProps {
	property: Property;
}

export default function Property({ property }: HomeProps) {
	return (
		<PropertyContext.Provider value={property as Property}>
			<div>
				<Head>
					<title>{property.name} | Seazone</title>
				</Head>
				<div className={styles.container}>
					<header className={styles.navigation}>
						<Link href={"/properties/"}>
							<a>imóveis</a>
						</Link>
						<RiArrowRightSLine />
						<span>{property.address.street}</span>
					</header>

					<div className={styles.gridContainer}>
						<div>
							<PropertyLocalization />
						</div>
						<div className={styles.details}>
							<PropertyDetails />
						</div>
					</div>
				</div>
			</div>
		</PropertyContext.Provider>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get("properties", {
		params: {
			_limit: 6,
		},
	});

	const paths = data.map((property) => {
		return {
			params: {
				slug: property.id,
			},
		};
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { slug } = ctx.params;

	const { data } = await api.get(`/properties/${slug}`);

	const property = {
		id: data.id,
		name: data.name,
		description: {
			room: data.description.room,
			bedroom: data.description.bedroom,
			bathroom: data.description.bathroom,
		},
		status: data.status,
		maxHosts: data.maxHosts,
		cleaningTax: data.cleaningTax,
		guarantee: data.guarantee,
		daily: data.daily,
		address: data.address,
		rules: data.rules,
		amenities: data.amenities,
		img: data.img,
	};

	return {
		props: { property },
		revalidate: 60 * 60 * 4, //4 hours
	};
};
