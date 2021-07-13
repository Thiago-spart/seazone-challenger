import { PropertyContext } from "../../../hook/useProperty";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";

import { api } from "../../../services/api";
import { PropertyLocalization } from "../../../components/PropertyLocalization";

import { validatePermission } from "../../../utils/validatePermission";
import { formatValues } from "../../../utils/formatValues";

import { RiArrowRightSLine } from "react-icons/ri";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";

import styles from "./property.module.scss";
import { PropertyDetails } from "../../../components/PropertyDetails";

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

interface HomeProps {
  property: Property;
}

export default function Property({ property }: HomeProps) {
  return (
    <PropertyContext.Provider value={property}>
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
            <span>{property.street}</span>
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
    child: validatePermission(data.rules.child),
    baby: validatePermission(data.rules.baby),
    crib: validatePermission(data.rules.crib),
    ageRestrictions: validatePermission(data.rules.ageRestrictions),
    allowSmokingRoom: validatePermission(data.rules.allowSmokingRoom),
    pets: validatePermission(data.rules.pets),
    event: validatePermission(data.rules.event),
    parking: validatePermission(data.amenities.parking),
    elevator: validatePermission(data.amenities.elevator),
    doorman: validatePermission(data.amenities.doorman),
    privatePool: validatePermission(data.amenities.privatePool),
    internet: validatePermission(data.amenities.internet),
    wifi: validatePermission(data.amenities.wifi),
    airConditioner: validatePermission(data.amenities.airConditioner),
    tv: validatePermission(data.amenities.tv),
    img: data.img,
  };

  return {
    props: { property },
    revalidate: 60 * 60 * 4, //4 hours
  };
};
