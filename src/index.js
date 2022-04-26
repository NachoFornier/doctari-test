import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = () => {
  const [counter, setcounter] = useState(1)

  return (
    <div>
      <button onClick={() => setcounter(counter + 1)}> +1</button>
      <h3>{counter}</h3>
    </div>
  )
}
