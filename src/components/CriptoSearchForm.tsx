import { useState } from "react"
import { useCryptoStore } from "../../store"
import { currencies } from "../data"
import type { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"

export default function CriptoSearchForm() {
    const { cryptoCurrencies, fetchData, resetResult } = useCryptoStore()

    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            resetResult()
            return
        }
        setError('')
        // Consultar API
        fetchData(pair)
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select 
                name="currency" 
                id="currency"
                value={pair.currency}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {currencies.map(currencie => (
                    <option key={currencie.code} value={currencie.code}>{currencie.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select 
                name="criptocurrency" 
                id="criptocurrency"
                value={pair.criptocurrency}
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {cryptoCurrencies.map(crypto => (
                    <option 
                        key={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}
                    >{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>
        <input type="submit" value={'Cotizar'} />
    </form>
  )
}
