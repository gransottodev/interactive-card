"use client"
import { createContext, ReactNode, useState } from "react";


interface CardProps{
  children: ReactNode;
}

export const CardContext = createContext({
  number: 0,
  setNumber: (value : number) => {},
  holder: '',
  setHolder: (value : string) => {},
  day: 0,
  setDay: (value: number) => {},
  month: 0,
  setMonth: (value : number) => {},
  cvv: 0,
  setCvv: (value : number) => {}
})

export function CardProvider({children} : CardProps){
  const [number, setNumber] = useState(0)
  const [holder, setHolder] = useState('')
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [cvv, setCvv] = useState(0)

  return(
    <CardContext.Provider value={{
      number,
      setNumber,
      holder,
      setHolder,
      day,
      setDay,
      month,
      setMonth,
      cvv,
      setCvv
    }}>
      {children}
    </CardContext.Provider>
  )
}