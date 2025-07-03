import axios from "axios"
import { CryptoCurrencyResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import type { Pair } from "../types"

export async function getCriptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&limit=20'
    const { data: {Data} } = await axios(url)
    const result = CryptoCurrencyResponseSchema.safeParse(Data)
    if(result.success) {
        return result.data
    }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    
    const { data: {DISPLAY} } = await axios(url)
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if(result.success) {
        return result.data
    }
}