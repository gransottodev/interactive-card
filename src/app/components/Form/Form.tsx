"use client";
import { useContext } from "react";
import styles from "./styles.module.css";
import { CardContext } from "@/app/context/cardContext";

export function Form() {
  const { setHolder, setNumber, setDay, setMonth, setCvv } =
    useContext(CardContext);
  return (
    <form action="" className={styles.containerForm}>
      <div className={styles.inputGroup}>
        <label className={styles.formLabel} htmlFor="cardHolder">
          Cardholder Name:
        </label>
        <input
          className={styles.inputCard}
          onChange={(event) => setHolder(event.target.value)}
          type="text"
          id="cardHolder"
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.formLabel} htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className={styles.inputCard}
          onChange={(event) => setNumber(event.target.value)}
          type="number"
          id="cardNumber"
        />
      </div>
      <div className={styles.dateContainer}>
        <div className={styles.dateInputGroup}>
          <label htmlFor="">EXP. DATE (MM/YY)</label>
          <div className={styles.expDate}>
            <input
              type="number"
              placeholder="00"
              onChange={(event) => setDay(event.target.value)}
            />
            <input
              type="number"
              placeholder="00"
              onChange={(event) => setMonth(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.dateInputGroup}>
          <label htmlFor="">CVV</label>
          <input
            type="number"
            placeholder="000"
            onChange={(event) => setCvv(event.target.value)}
          />
        </div>
      </div>
      <button className={styles.btn}>Confirm</button>
    </form>
  );
}
