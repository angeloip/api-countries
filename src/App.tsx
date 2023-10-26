import Articles from './components/Articles'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto my-8 max-w-7xl">
        <Header />
        <section className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
          <Articles />
        </section>
      </main>
    </>
  )
}

export default App
