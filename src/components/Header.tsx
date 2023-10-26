import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  return (
    <div className="flex items-center justify-between">
      <section className="dark:bg-[#2B3845] flex items-center py-4 rounded-lg w-[450px]">
        <div className="px-4">
          <FaSearch />
        </div>
        <input
          type="text"
          className="bg-transparent outline-none pr-2 w-full"
        />
      </section>
      <section
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
        className="relative dark:bg-[#2B3845] h-14 flex items-center gap-4 px-4 rounded-lg cursor-pointer w-[200px]"
      >
        <span className="flex-1">Filter by Region</span>
        <div className="text-xl">
          <MdOutlineKeyboardArrowDown />
        </div>
        <ul
          className={`absolute ${
            isOpen ? 'block' : 'hidden'
          } z-[100] rounded-lg left-0 overflow-hidden top-[calc(100%_+_0.25em)] dark:bg-[#2B3845] w-full`}
        >
          {continents.map((continent) => (
            <li
              key={continent}
              className="cursor-pointer px-4 py-2 hover:bg-[#394958] transition-colors"
            >
              {continent}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
