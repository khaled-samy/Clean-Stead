import React from 'react'
import { Link } from 'react-router-dom'

interface NavItemProps {
  to: string
  children: React.ReactNode
}

export default function NavItem ({ to, children }: NavItemProps): JSX.Element {
  return (
      <Link to={to}>
        <li className="p-4 md:border-none border-b border-white hover:text-blue-600">{children}</li>
      </Link>
  )
}
