import { Box, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../providers/Currency'

const itemPrice = 10

const Calculator = () => {
  const [amount, setAmount] = useState('5')
  const [calculatedValue, setCalculatedValue] = useState(0)
  const currencyContext = useContext(CurrencyContext)

  const currentCurrency = currencyContext.currency.currencies.filter(
    (cur) => cur.id === currencyContext.currency.currentCurrencyId
  )

  const calculateAmount = (amount: number, currencyValue: number) => {
    setCalculatedValue(amount * (itemPrice * currencyValue))
  }

  useEffect(() => {
    calculateAmount(+amount, currentCurrency[0].value)
  }, [amount, currentCurrency])

  const getFieldValue = () =>
    `${currentCurrency[0].name}: ${
      Number(calculatedValue) % 1 !== 0
        ? Number(calculatedValue).toFixed(2)
        : Number(calculatedValue)
    }`

  return (
    <Box display='flex' justifyContent='center' alignItems='center' gap={2}>
      <TextField
        label='Amount'
        value={amount}
        type='number'
        InputProps={{
          inputProps: {
            min: 0
          }
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          setAmount(e.target.value)
        }
      />
      <TextField
        disabled
        label='Price'
        value={getFieldValue()}
      />
    </Box>
  )
}

export default Calculator
