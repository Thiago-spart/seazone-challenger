import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiHome, TiMap } from "react-icons/ti";
import { convertPrice } from "../../utils/convertPrice";
import { formatValues } from "../../utils/formatValues";
import styles from "./styles.module.scss";

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

export const PropertyCard = ({
  id,
  name,
  room,
  street,
  maxHosts,
  cleaningTax,
  guarantee,
  daily,
  img,
}: Property) => {
  const prices = convertPrice(daily, cleaningTax);

  return (
    <div className={styles.Container}>
      <div>
        <Link href={`/properties/property/${id}`}>
          <div className={styles.imgContainer}>
            <img src={img} alt={name} />
            <div className={styles.iconCard}>
              <div>
                <TiMap />
              </div>
              <div>
                <TiHome />
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.cardHeader}>
          <div>
            <h2>{name}</h2>
            <p>
              {street} . {maxHosts} hóspedes . {room} quartos
            </p>
          </div>
          <span>
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.price}>
            <span>Valor diária</span>
            <span>{formatValues(daily)} / noite</span>
          </div>
          <div className={styles.price}>
            <span>Total 5 diárias</span>
            <span>{formatValues(prices.dairyFiveDays)}</span>
          </div>
          <div className={styles.price}>
            <span>Taxa de limpeza</span>
            <span>{formatValues(cleaningTax)}</span>
          </div>
          <div className={styles.price}>
            <span>Caução</span>
            <span>{formatValues(guarantee)}</span>
          </div>
          <div className={styles.totalPrice}>
            <span>Total:</span>
            <div>
              <span>{formatValues(prices.total)} |</span>
              <div>
                <span>{formatValues(prices.discount)}</span>
                <p>à vista</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
