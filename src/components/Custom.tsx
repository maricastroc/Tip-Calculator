import { ChangeEvent } from 'react'
import styles from './Custom.module.css'

interface CustomProps {
  inputClass: string
  onChange: (value: number) => void
}

export function Custom(props: CustomProps) {
  // evitando que o usuário preencha mais de dois dígitos no input
  function handleChangeValue(ev: ChangeEvent<HTMLInputElement>) {
    ev.target.value = ev.target.value.slice(0, 2)

    if (!isNaN(parseFloat(ev.target.value))) {
      props.onChange(parseFloat(ev.target.value))
    }
  }

  return (
    <div className={styles.custom}>
      <input
        type="number"
        placeholder="Custom"
        className={props.inputClass}
        max={99}
        min={0}
        step={5}
        onChange={handleChangeValue}
      />
    </div>
  )
}
