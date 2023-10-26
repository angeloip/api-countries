import React from 'react'

export default function Articles() {
  return (
    <>
      <article className="dark:bg-[#2B3845] rounded-lg overflow-hidden">
        <img
          src="https://flagcdn.com/w320/uz.png"
          alt="bandera"
          className="w-full"
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold mb-4">Nombre</h3>
          <p>
            <span className="font-semibold">Population:</span> 123456
          </p>
          <p>
            <span className="font-semibold">Region:</span> Europe
          </p>
          <p>
            <span className="font-semibold">Capital:</span> Berlin
          </p>
        </div>
      </article>
    </>
  )
}
