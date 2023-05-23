import {useState, createContext} from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../Helpers"
const CotizadorContext = createContext();


const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",
    })

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)


    const cotizarSeguro = () => {
        //Una Base
        let resultado = 2000

        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        //Hay que restar ell 3% de cada año
        resultado -= ((diferencia * 3) * resultado) / 100

        // Europeo 30%
        //Americano 15%
        //Asiatico 5%
        resultado *= calcularMarca(datos.marca)

        //Plan Basico incrementa 20%
        //Plan Completo incrementa 50%

        resultado *= calcularPlan(datos.plan)
        resultado = resultado.toFixed(2)

        //Formatear Dinero

        resultado = formatearDinero(resultado)

        setResultado(resultado)

        setCargando(true)

        setTimeout(() =>{
            setResultado(resultado) 
            setCargando(false)
        }, 3000)

    }

    return(

        <CotizadorContext.Provider value={{   handleChangeDatos, datos, error, setError, cotizarSeguro, resultado, cargando}}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext