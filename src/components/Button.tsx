import styles from './Button.module.css'

interface ButtonProps {
  btnID: string
  btnValue: number
  enabledButton: boolean
  onClick: (value: number) => void
}

export function Button(props: ButtonProps) {
  function handleClickButton() {
    props.onClick(props.btnValue)
  }
  return (
    <div className={styles.button} onClick={handleClickButton}>
      <input
        className={
          props.enabledButton ? styles.enabled_button : styles.disabled_button
        }
        type="radio"
        id={props.btnID}
        name="tipValue"
        value={props.btnValue}
      />
      <label htmlFor={props.btnID}>{props.btnValue * 100}%</label>
    </div>
  )
}
