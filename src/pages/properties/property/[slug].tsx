import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { api } from "../../../services/api";

import { RiArrowRightSLine } from "react-icons/ri";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./property.module.scss";

type Property = {
  id: string;
  name: String;
  room: number;
  bedroom: number;
  bathroom: number;
  status: boolean;
  maxHosts: number;
  minHosts: number;
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
  child: boolean;
  baby: boolean;
  crib: boolean;
  ageRestrictions: boolean;
  allowSmokingRoom: boolean;
  pets: boolean;
  event: boolean;
  parking: boolean;
  elevator: boolean;
  doorman: boolean;
  privatePool: boolean;
  internet: boolean;
  wifi: boolean;
  airConditioner: boolean;
  tv: boolean;
  img: string;
};

type HomeProps = {
  property: Property;
};

export default function Property({ property }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{property.name} | Seazone</title>
      </Head>
      <div className={styles.propertyContainer}>
        <div className={styles.navegate}>
          <Link href={"/properties/"}>
            <span>imóveis</span>
          </Link>
          <RiArrowRightSLine />
          <span>{property.street}</span>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.localization}>
            <div className={styles.imgContainer}>
              <img src={"/" + property.img} /*alt={property.name}*/ />
            </div>

            <div className={styles.localizationDetails}>
              <h3>Localização</h3>
              <p>
                {property.district} {property.number}, {property.street},{" "}
                {property.city} - {property.state}
              </p>
              <p>CEP {property.cep}</p>
              <Link href={property.geolocalization}>
                <button type="button">Ver localização</button>
              </Link>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.titleHeader}>
              <h2>{property.name}</h2>
              <p>
                {property.street}, {property.city}
              </p>
            </div>
            <div className={styles.titleBody}>
              <span>
                {property.room} quartos . {property.bedroom} camas .{" "}
                {property.bathroom} banheiros
              </span>
              <div className={styles.status}>
                <BsFillCircleFill />
                <span>ativo</span>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <div>
                <p>Máx. de hóspedes</p>
                <span className={styles.icon}>
                  <HiOutlineUserGroup />
                </span>
                <span>{property.maxHosts}</span>
              </div>
              <div>
                <p>Taxa de limpeza</p>
                <span className={styles.icon}>
                  <AiOutlineClear />
                </span>
                <span>R${property.cleaningTax}</span>
              </div>
              <div>
                <p>Caução</p>
                <span className={styles.icon}>
                  <GiReceiveMoney />
                </span>
                <span>R${property.guarantee}</span>
              </div>
            </div>
            <div className={styles.bedDetails}>
              <h3>Camas</h3>
              <div className={styles.bedContainer}>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    1 cama de casal:
                  </span>
                  <span className={styles.quantBed}>duplo</span>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    1 sofá/cama:
                  </span>
                  <span className={styles.quantBed}>sala/área comum</span>
                </div>
              </div>
            </div>
            <div className={styles.rules}>
              <h3>Regras</h3>
              <div className={styles.rulesContainer}>
                <div>
                  <span>Aceita Crianças (de 02 até 12 anos)</span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>Aceita Bebês (abaixo de 02)</span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>Fornece Berços</span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>Restrição de idade para fazer reserva</span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>Permite fumar no quarto</span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>Aceita animais de estimção</span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>Eventos são permitidos</span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
              </div>
              <button type="button" className={styles.moreRules}>
                Mais regras <TiArrowSortedDown />
              </button>
            </div>
            <div className={styles.amenities}>
              <h3>Comodidades</h3>
              <div className={styles.amenitiesContainer}>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Estacionamento
                  </span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Elevador
                  </span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Porteiro
                  </span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Piscina Privada
                  </span>
                  <button type="button" className={styles.deny}>
                    não
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Internet
                  </span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Wi-fi
                  </span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    Ar-condicionado
                  </span>
                  <button type="button" className={styles.deny}>
                    Não
                  </button>
                </div>
                <div>
                  <span>
                    <span className={styles.miniBall}>
                      <BsFillCircleFill />
                    </span>{" "}
                    TV
                  </span>
                  <button type="button" className={styles.allow}>
                    Sim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("properties", {
    params: {
      _limit: 6,
    },
  });

  const paths = data.map(property => {
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

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params;

  const { data } = await api.get(`/properties/${slug}`);

  const property = {
    id: data.id,
    name: data.name,
    room: data.description.room,
    bedroom: data.description.bedroom,
    bathroom: data.description.bathroom,
    status: data.status,
    maxHosts: data.maxHosts,
    minHosts: data.minHosts,
    cleaningTax: data.cleaningTax,
    guarantee: data.guarantee,
    daily: data.daily,
    city: data.address.city,
    state: data.address.state,
    street: data.address.street,
    district: data.address.district,
    number: data.address.number,
    cep: data.address.cep,
    geolocalization: data.address.geolocalization,
    child: data.rules.child,
    baby: data.rules.baby,
    crib: data.rules.crib,
    ageRestrictions: data.rules.ageRestrictions,
    allowSmokingRoom: data.rules.allowSmokingRoom,
    pets: data.rules.pets,
    event: data.rules.event,
    parking: data.amenities.parking,
    elevator: data.amenities.elevator,
    doorman: data.amenities.doorman,
    privatePool: data.amenities.privatePool,
    internet: data.amenities.internet,
    wifi: data.amenities.wifi,
    airConditioner: data.amenities.airConditioner,
    tv: data.amenities.tv,
    img: data.img,
  };

  return {
    props: { property },
    revalidate: 60 * 60 * 4, //4 hours
  };
};
