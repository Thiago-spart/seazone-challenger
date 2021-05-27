import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../../services/api";
import { TiArrowSortedDown, TiHome, TiMap } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";

import styles from "./home.module.scss";

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
    <div className={styles.homepage}>
      <Head>
        <title>Home | Seazone </title>
      </Head>

      <section className={styles.sectionContainer}>
        <div className={styles.titleSection}>
          <h2>Todos os imóveis</h2>
          <span>{propertyList.length} ímoveis</span>
        </div>
        <div className={styles.filterButton}>
          <button>
            Ordenar
            <TiArrowSortedDown />
          </button>
        </div>
      </section>

      <section className={styles.cardContainer}>
        {propertyList.map(property => {
          return (
            <div key={property.id} className={styles.propertyCard}>
              <div>
                <div className={styles.imgContainer}>
                  <Link href={`/properties/property/${property.id}`}>
                    <img src={property.img} alt={property.name} />
                  </Link>
                  <div className={styles.iconCard}>
                    <div>
                      <TiMap />
                    </div>
                    <div>
                      <TiHome />
                    </div>
                  </div>
                </div>
                <div className={styles.cardHeader}>
                  <div>
                    <h2>{property.name}</h2>
                    <p>
                      {property.street} . {property.maxHosts} hóspedes .{" "}
                      {property.room} quartos
                    </p>
                  </div>
                  <span>
                    <BsThreeDotsVertical />
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.price}>
                    <span>Valor diária</span>
                    <span>R${property.daily} / noite</span>
                  </div>
                  <div className={styles.price}>
                    <span>Total 5 diárias</span>
                    <span>R${property.daily * 5}</span>
                  </div>
                  <div className={styles.price}>
                    <span>Taxa de limpeza</span>
                    <span>R${property.cleaningTax}</span>
                  </div>
                  <div className={styles.price}>
                    <span>Caução</span>
                    <span>R${property.guarantee}</span>
                  </div>
                  <div className={styles.totalPrice}>
                    <span>Total:</span>
                    <div>
                      <span>
                        R${5 * property.daily + property.cleaningTax} |
                      </span>
                      <div>
                        <span>
                          R${5 * property.daily + property.cleaningTax}
                        </span>
                        <p>à vista</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
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
