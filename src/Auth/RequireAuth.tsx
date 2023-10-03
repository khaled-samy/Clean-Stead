import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function RequireAuth ({ element }: { element: JSX.Element }): JSX.Element {
  const { user, setModalOpen } = useAuth()

  if (user === null) {
    setModalOpen(true)
    return <Navigate to='/' />
  }
  return element
}
