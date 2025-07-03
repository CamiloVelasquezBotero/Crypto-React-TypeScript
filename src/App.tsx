import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from '../store'
import { useEffect } from "react"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay"

function App() {
  /* const fetchCryptos = useCryptoStore((state) => state.fetchCryptos) */
  const { fetchCryptos } = useCryptoStore()

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-tittle">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoSearchForm />
          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
