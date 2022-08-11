import Head from 'next/head'
import React from 'react'
import Header from "../components/Header"

const Layout = ({title,description,children}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className='relative z-10 min-h px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat' >
        <div className='w-full h-full'>
        <Header/>
        {children}
        </div>
    </div>
      
    </>
  )
}

export default Layout