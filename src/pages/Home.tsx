import Header from '../components/Header'
import Articles from '../components/Articles'
import { useEffect, useState } from 'react'
import { Countries } from '../data'

export default function Home() {
  const [countries, setCountries] = useState<Countries[] | null>(null)
  const [search, setSearch] = useState('')

  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <main className="mx-auto my-8 max-w-7xl">
      <Header search={search} setSearch={setSearch} />
      <section className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        <Articles countries={countries} />
      </section>
    </main>
  )
}
