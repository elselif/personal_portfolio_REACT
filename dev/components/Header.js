import React from 'react'

function Header() {
  return (
    <header className='flex  items-center justify-between text-white px-6 py-4 h-16  max-w-5xl mx-auto mt-12 bg-transparent'>
        <span></span>
        <button className='px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase'>
            Dark
        </button>
    </header>
  )
}

export default Header