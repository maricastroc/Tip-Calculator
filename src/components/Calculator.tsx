import { Input } from './Input'

import styles from './Calculator.module.css'
import { Button } from './Button'
import { Custom } from './Custom'
import { useEffect, useState } from 'react'

export function Calculator() {
  const [enabledButton, setEnabledButton] = useState(true)

  const [tipPercentage, setTipPercentage] = useState(0.15)
  const [billValue, setBillValue] = useState<number | string>(142.55)
  const [peopleNumber, setPeopleNumber] = useState<number | string>(5)

  const [tipAmount, setTipAmount] = useState(0.0)
  const [totalForEach, setTotalForEach] = useState(0.0)

  function changeCustomValue(value: number) {
    if (!isNaN(value)) {
      setTipPercentage(value / 100)
      setEnabledButton(false)
    }
  }

  function changeTipPercentage(value: number) {
    ;(document.querySelector('.custom-amount') as HTMLInputElement).value = ''

    setEnabledButton(true)
    setTipPercentage(value)
  }

  function changeBillValue(value: number | string) {
    setBillValue(value)
  }

  function changePeopleNumber(value: number | string) {
    setPeopleNumber(value)
  }

  function resetCalculator() {
    setTipPercentage(0)
    setBillValue('')
    setPeopleNumber('')
    setTipAmount(0)
    setTotalForEach(0)
    ;(document.querySelector('.custom-amount') as HTMLInputElement).value = ''
  }

  useEffect(() => {
    if (typeof billValue === 'number' && typeof peopleNumber === 'number') {
      const tipAmount = (billValue! * tipPercentage) / peopleNumber!

      const totalForEach =
        (billValue! * tipPercentage + billValue!) / peopleNumber!

      if (!isFinite(tipAmount) || isNaN(tipAmount)) {
        setTipAmount(0.0)
        setTotalForEach(0.0)
      } else {
        setTipAmount(parseFloat(tipAmount.toFixed(2)))
        setTotalForEach(parseFloat(totalForEach.toFixed(2)))
      }
    } else {
      setTipAmount(0.0)
      setTotalForEach(0.0)
    }
  }, [tipPercentage, billValue, peopleNumber, tipAmount, totalForEach])

  return (
    <main className={styles.calculator}>
      <section className={styles.user_inputs}>
        <div className={styles.bill}>
          <strong>Bill</strong>
          <Input
            type="number"
            input_id="bill"
            icon_src="../../src/assets/icon-dollar.svg"
            placeholder="0.00"
            value={billValue}
            onChange={changeBillValue}
          />
        </div>
        <div className={styles.select_tip}>
          <strong>Select Tip %</strong>
          <div className={styles.select_tip_buttons}>
            <Button
              btnID="btn-5"
              btnValue={0.05}
              onClick={changeTipPercentage}
              enabledButton={enabledButton}
            />
            <Button
              btnID="btn-10"
              btnValue={0.1}
              onClick={changeTipPercentage}
              enabledButton={enabledButton}
            />
            <Button
              btnID="btn-15"
              btnValue={0.15}
              onClick={changeTipPercentage}
              enabledButton={enabledButton}
            />
            <Button
              btnID="btn-25"
              btnValue={0.25}
              onClick={changeTipPercentage}
              enabledButton={enabledButton}
            />
            <Button
              btnID="btn-50"
              btnValue={0.5}
              onClick={changeTipPercentage}
              enabledButton={enabledButton}
            />
            <Custom inputClass="custom-amount" onChange={changeCustomValue} />
          </div>
        </div>
        <div className={styles.number_of_people}>
          <strong>Number of People</strong>
          <Input
            type="number"
            input_id="people"
            icon_src="../../src/assets/icon-person.svg"
            placeholder="0"
            value={peopleNumber}
            onChange={changePeopleNumber}
          />
        </div>
      </section>
      <section className={styles.results}>
        <div className={styles.results_items}>
          <div className={styles.results_item}>
            <div>
              <strong>Tip Amount</strong>
              <p>/ person</p>
            </div>
            <h1>${tipAmount.toFixed(2)}</h1>
          </div>
          <div className={styles.results_item}>
            <div>
              <strong>Total</strong>
              <p>/ person</p>
            </div>
            <h1>${totalForEach.toFixed(2)}</h1>
          </div>
        </div>
        <button onClick={resetCalculator}>RESET</button>
      </section>
    </main>
  )
}
