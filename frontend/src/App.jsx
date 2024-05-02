import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import AllCountryPage from "./pages/AllCountryPage"
import Country from "./pages/CountryPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
