import { ChangeEvent, useState } from 'react'
import styles from './Input.module.css'

interface InputProps {
  type: string
  input_id: string
  icon_src: string
  placeholder: string
  value: number | string
  onChange: (value: number | string) => void
  onInvalid: (value: boolean) => void
}

export function Input(props: InputProps) {
  const [error, setError] = useState(false)

  function handleChangeInputValue(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target.value) {
      props.onChange(parseFloat(ev.target.value))
    } else {
      props.onChange('')
    }

    if (ev.target.value === '0' && props.input_id === 'people') {
      setError(true)
      props.onInvalid(true)
    } else {
      setError(false)
      props.onInvalid(false)
    }
  }

  return (
    <div className={error ? styles.inputContainerError : styles.inputContainer}>
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
