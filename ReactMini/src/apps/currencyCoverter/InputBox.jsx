import React, {useId} from 'react'
import { BsDatabaseFill } from 'react-icons/bs'

function InputBox({
          label, currencyOption=[],
          amount, currencyType="usd",
          onCurrencyChange, onAmountChange,
          amountDisable=false, currencyDisable=false
          
        }) {
  const amountInputId = useId()
  console.log("This is ", currencyOption)
  return (
    <>
        <div className='flex flex-col justify-around bg-white py-2 px-3 gap-3'>
            <label 
            className='text-black/40 mb-2 inline-block'
            htmlFor={amountInputId}>{label}</label>
            <input id={amountInputId} type="number"
            placeholder='Amount'
            className='outline-none w-full bg-transparent py-1.5'
            // className=" outline-none w-full bg-transparent py-1.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
            value={amount.toFixed(4)}
            disabled={amountDisable}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
            
        </div>
    
        <div className='flex flex-col justify-around bg-white py-2 px-3 gap-3'>
            <p className='text-black/40 mb-2 w-full'>Curreny Type</p>
            <select  
            className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
            value={currencyType}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                {
                    currencyOption.map( (ele) => (
                      <option key={ele} value={ele}>{ele}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}

export default InputBox