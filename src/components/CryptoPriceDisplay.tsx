import { useMemo } from "react"
import { useCryptoStore } from "../../store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const { result, loading } = useCryptoStore()
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
      <div className="result-wrapper">
        {loading ? <Spinner /> : hasResult && (
            <>
                <h2>Cotización</h2>
                <div className="result">
                    <img 
                        src={`https://cryptocompare.com${result.IMAGEURL}`}
                        alt="Imagen Cryptomoneda" 
                    />
                    <div>
                        <p>El Precio es De: <span>{result.PRICE}</span></p>
                        <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
                        <p>Precio mas bajo del dia: <span>{result.LOWDAY}</span></p>
                        <p>Variación ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>Ultima Actualización: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
      </div>
    )
}
