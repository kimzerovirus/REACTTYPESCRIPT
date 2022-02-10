import React from 'react'
import Nav from '../components/Nav/Nav'

function DefaultLayout({children}) {
  return (
    <>
        <Nav/>
        <main>
            {children}
        </main>
    </>
  )
}

export default DefaultLayout