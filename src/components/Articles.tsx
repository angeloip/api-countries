import { Countries } from '../data'

interface Props {
  countries: Countries[] | null
}

export default function Articles({ countries }: Props) {
  return (
    countries &&
    countries.map((country) => (
      <article
        key={country.name.common}
        className="dark:bg-[#2B3845] rounded-lg overflow-hidden shadow-md shadow-zinc-700"
      >
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full"
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold mb-4">{country.name.common}</h3>
          <p>
            <span className="font-semibold">Population:</span>{' '}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
        </div>
      </article>
    ))
  )
}
