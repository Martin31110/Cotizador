import { CotizadorProvider } from "./Context/CotizadorProvider"
import AppSeguro from "./Components/AppSeguro"


function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}
export default App