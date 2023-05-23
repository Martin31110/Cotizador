import { useContext } from "react"
import CotizadorContext from "../Context/CotizadorProvider"


const useCotizador = () =>  {
    return useContext(CotizadorContext)
}

export default useCotizador