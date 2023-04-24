import { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface InputProps {
  type: string
  input_id: string
  icon_src: string
  placeholder: string
  value: number | string
  onChange: (value: number | string) => void
}

export function Input(props: InputProps) {
  function handleChangeInputValue(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target.value) {
      props.onChange(parseFloat(ev.target.value))
    } else {
      props.onChange('')
    }
  }

  return (
    <div className={styles.inputContainer}>
      <img src={props.icon_src} alt="" />
      <input
        type={props.type}
        id={props.input_id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChangeInputValue}
        required
      />
    </div>
  )
}
