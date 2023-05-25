import { useContext } from 'react'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { CurrencyContext } from '../providers/Currency'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const CurrencySelect = () => {
  const currencyContext = useContext(CurrencyContext)
  const handleCurrencyChange = (e: SelectChangeEvent<number>): void => {
    currencyContext.changeCurrency(+e.target.value)
  }
  return (
    <>
      {currencyContext.currency.currencies && (
        <Select
          value={currencyContext.currency.currentCurrencyId}
          onChange={handleCurrencyChange}
          variant='standard'
          IconComponent={() => (
            <KeyboardArrowDownIcon
              sx={{
                position: 'absolute',
                right: 0,
                pointerEvents: 'none',
                top: '12px',
                padding: 0
              }}
            />
          )}
        >
          {currencyContext.currency.currencies.map((currencyItem) => (
            <MenuItem
              key={currencyItem.id}
              value={currencyItem.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <img src={currencyItem.flag} alt={currencyItem.name}></img>
              {currencyItem.name}
            </MenuItem>
          ))}
        </Select>
      )}
    </>
  )
}

export default CurrencySelect
