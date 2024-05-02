import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

const AllCountryPage = () => {
    const [countrys, setCountrys] = useState([])

    useEffect(() => {
        async function fetchCountry() {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setCountrys(response.data)
        }

        fetchCountry()
    }, [])

    return (
        <div className="mx-5">
            <div className="grid grid-cols-4 gap-5">
                {countrys.map((country) => {
                    return (
                        <Link to={`/country/${country.name.common}`} key={country.name.common} className="border bg-white border-slate-100 rounded-3xl cursor-pointer p-8 transition-all duration-300 ease hover:-translate-y-2 hover:shadow-xl w-[300px]">
                            <img src={country.flags.svg} alt={country.name.common} className="mt-2 w-[250px] border border-transparent rounded-lg mb-5" />
                            <div className="flex justify-between mt-3">
                                <div className="flex flex-col">
                                    <span>Name: {country.name.common}</span>
                                    <span>Official name: {country.name.official}</span>
                                    <span>Region: {country.region}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AllCountryPage