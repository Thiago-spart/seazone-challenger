import { GetStaticProps } from "next";
import Head from "next/head";

import { api } from "../../services/api";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./home.module.scss";
import { PropertyCard } from "../../components/PropertyCard";

type Property = {
  id: string;
  name: string;
  room: number;
  street: string;
  maxHosts: number;
  cleaningTax: number;
  guarantee: number;
  daily: number;
  img: string;
};

type HomeProps = {
  properties: Property[];
};

export default function Home({ properties }: HomeProps) {
  const propertyList = [...properties];
  return (
    <main className={styles.homepage}>
      <Head>
        <title>Propriedades | Seazone</title>
      </Head>

      <section className={styles.titleContainer}>
        <div className={styles.titleSection}>
          <h2>Todos os imóveis</h2>
          <span>{propertyList.length} ímoveis</span>
        </div>
        <button>
          Ordenar
          <TiArrowSortedDown />
        </button>
      </section>

      <section className={styles.cardContainer}>
        {propertyList.map(property => {
          return (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              room={property.room}
              street={property.street}
              maxHosts={property.maxHosts}
              cleaningTax={property.cleaningTax}
              guarantee={property.guarantee}
              daily={property.daily}
              img={property.img}
            />
          );
        })}
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("properties", {
    params: {
      _limit: 6,
    },
  });
  const properties = data.map(property => {
    return {
      id: property.id,
      name: property.name,
      room: property.description.room,
      street: property.address.street,
      maxHosts: property.maxHosts,
      cleaningTax: property.cleaningTax,
      guarantee: property.guarantee,
      daily: property.daily,
      img: property.img,
    };
  });

  return {
    props: {
      properties,
    },
    revalidate: 60 * 60 * 8, //8 HRs
  };
};
