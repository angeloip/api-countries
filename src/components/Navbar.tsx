import { BsMoon } from 'react-icons/bs'

export default function Navbar() {
  return (
    <nav className="py-6 dark:bg-[#2B3845] shadow-md">
      <section className="mx-auto max-w-7xl flex items-center justify-between">
        <h1 className="font-bold text-2xl">Where in the world?</h1>
        <button className="flex items-center gap-2">
          <BsMoon />
          Dark Mode
        </button>
      </section>
    </nav>
  )
}
