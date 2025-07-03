import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

/* Le decimos que sera de tipo array */
export const CryptoCurrencyResponseSchema = z.array(
    z.object({
        CoinInfo: z.object({
            FullName: z.string(),
            Name: z.string()
        })
    })
)
//  Pasamos el objeto al array para convertir cada dato obtenido en array
/* export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema) */

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})