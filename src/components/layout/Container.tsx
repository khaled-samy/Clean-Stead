import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface IContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

export default function Container ({ children }: IContainerProps): JSX.Element {
  return (
    <div className="Container max-w-[1240px] mx-auto px-4">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
