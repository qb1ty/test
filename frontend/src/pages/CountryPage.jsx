import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Country = () => {
    const { name } = useParams()
    const [country, setCountrys] = useState([])

    useEffect(() => {
        async function fetchCountry() {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
            setCountrys(response.data)
        }

        fetchCountry()
    }, [name])

    return (
        <div className="flex flex-row justify-center items-center">
            {country.map((obj) => {
                return (
                    <div key={obj.name.common} className="border bg-white border-slate-100 rounded-3xl p-8 transition-all duration-300 ease hover:-translate-y-2 hover:shadow-xl w-[300px] mr-5">
                        <img src={obj.flags.svg} alt={obj.name.common} className="mt-2 w-[250px] border border-transparent rounded-lg mb-5" />
                        <div>{obj.name.common}</div>
                        <div>{obj.capital}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Country