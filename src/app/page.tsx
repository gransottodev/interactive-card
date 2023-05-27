"use client";
import { CardBack } from "./components/BackCard/Card-Back";
import { CardFrontal } from "./components/FrontalCard/Card-Front";
import styles from "./page.module.css";
import { CardContext } from "./context/cardContext";
import { useContext } from "react";
import { Form } from "./components/Form/Form";

export default function Home() {
  const {
    number,
    holder,
    day,
    month,
    cvv,
  } = useContext(CardContext);

  return (
    <main className={styles.container}>
      <div className={styles.lateralBar} />
      <CardFrontal cardNumber={number} name={holder} day={day} mouth={month} />
      <CardBack cvv={cvv} />
      <Form/>
    </main>
  );
}
