import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { CryptoCurrencies, CryptoPrice, Pair } from './src/types'
import { getCriptos, fetchCurrentCryptoPrice } from './src/services/CryptoService'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrencies,
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
    resetResult: () => void
}

const initialStateResult = {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
}

// Encerramos todo el store dentro del devtools para hacer uso del Redux
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: initialStateResult,
    loading: false,

    fetchCryptos: async () => {
        const cryptoCurrencies = await getCriptos()
        set(() => ({
            cryptoCurrencies /* Como se llaman igual entonces le pasamos solo uno */
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    },
    resetResult: () => {
        set(() => ({
            result: initialStateResult
        }))
    }
})))