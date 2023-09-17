import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface IContainerProps {
  children: React.ReactNode
}

export default function Container ({ children }: IContainerProps): JSX.Element {
  return (
        <div className='Container'>
        <Header />
        {children}
        <Footer />
        </div>
  )
}
