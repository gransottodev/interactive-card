import styles from './styles.module.css'

interface CardBackProps{
  cvv: number | undefined
}

export function CardBack(props: CardBackProps){ 
  return(
    <div className={styles.backCard}>
        <div className={styles.securityNumber}>{props.cvv}</div>
    </div>
  )
}