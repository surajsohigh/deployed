import React, { useState } from 'react'
import useCurrencyInfo from './useCurrencyInfo'
import InputBox from './InputBox'

function CurrencyCvt() {

    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [amount, setAmount] = useState(0)
    const [convertedAmount, setconvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const currencyOption = Object.keys(currencyInfo)
    // console.log(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setconvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setconvertedAmount(amount*currencyInfo[to])
    }


    return (
        <div className='bg-gray-400 w-screen h-screen flex justify-center items-center'
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg')`,
        }}
        >
            {/* Full container  */}
            <form className=''
                onSubmit={(e) => {
                    e.preventDefault()
                    convert()

                }}>
                {/* Currency from to container  */}
                <section className=''>
                    {/* From Input Container 1 */}
                    <div className='flex flex-row mb-1'>
                        <InputBox
                            label="From"
                            currencyOption = {currencyOption}
                            currencyType={from}
                            amount={amount}
                            // On selecting different amount 
                            onCurrencyChange={(currency) => setFrom(currency)}
                            onAmountChange={(amount) => setAmount(amount)} 
                        />
                    </div>

                    {/* swap  */}
                    <div className='relative w-full h-0.5'>
                        <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                        onClick={swap}
                        type='button'
                        >Swap</button>  
                    </div>

                    {/* To Input Container 2 */}
                    <div className='flex flex-row mt-1 mb-4'>
                        <InputBox
                            label="To"
                            currencyOption = {currencyOption}
                            currencyType={to}
                            amount={convertedAmount}
                            onCurrencyChange = {(curr) => setTo(curr) }
                            amountDisable={true}


                        />
                    </div>
                </section>
                {/* End Currency from to container */}

                {/* Button Container  */}
                
                <button 
                type='submit'
                className='my-2 bg-blue-600 px-4 py-2 rounded-md text-lg w-full'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                
            </form>
        </div>
    )
}

export default CurrencyCvt