import styles from './style.module.css'

interface CardFrontalProps {
  cardNumber: number | undefined;
  name: string;
  day: number | undefined;
  mouth: number | undefined
}



export function CardFrontal(props: CardFrontalProps) {
  return (
    <div className={styles.frontalCard}>
      <div className={styles.cardDecoration}>
        <div className={styles.whiteCircle}/>
        <div className={styles.transparentCircle}/>
      </div>

      <div className={styles.cardInfos}>
        <h1 className={styles.cardNumber}>{props.cardNumber === 0 ? 999999999999 : props.cardNumber}</h1>
        <div className={styles.cardFooter}>
          <span>{props.name === '' ? 'John Doe' : props.name}</span>
          <p>{props.day && props.mouth ? `${props.day}/${props.mouth}` : ''}</p>
        </div>
      </div>
    </div>
  )
}