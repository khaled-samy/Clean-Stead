import React, {
  createContext,
  useState,
  useMemo,
  type ReactNode,
  useContext
} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { type IUser, type IUserInfo, type IAuthContext } from './interfaces'
import { loginSchema, signupSchema } from '../validation'

// Create a context to manage authentication state
const AuthContext = createContext<IAuthContext | null>(null)

// Custom hook to use the AuthContext
export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (context == null) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

function AuthProvider ({ children }: { children: ReactNode }): JSX.Element {
  // Initialize state variables
  const [user, setUser] = useState<IUser | null>(null)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[]>([])
  const navigate = useNavigate()
  const URL = 'https://student.valuxapps.com/api/'

  // Function to handle user registration
  const signup = async (userInfo: IUserInfo): Promise<void> => {
    setLoading(true)
    const { data } = await axios.post(`${URL}register`, userInfo)
    try {
      try {
        await signupSchema.validate(userInfo, { abortEarly: false })
        const status: boolean = data.status
        if (status) {
          localStorage.setItem('token', data.data.token)
          setErrors([])
          setUser(data.data)
          setLoading(false)
          setModalOpen(false)
        } else {
          const message: string = data.message
          setErrors([message])
          setLoading(false)
        }
      } catch (validationError: any) {
        const errors = validationError.errors
        setErrors(errors)
        setLoading(false)
      }
    } catch (err: any) {
      const { status } = data
      if (status === 409) {
        setErrors(['Something went wrong!'])
      } else {
        const { message } = err.response?.data
        setErrors([message])
        console.error(err)
      }
    }
  }

  // Function to handle user login
  const login = async (userInfo: IUserInfo): Promise<void> => {
    try {
      setLoading(true)
      try {
        await loginSchema.validate(userInfo, { abortEarly: false })
        const { data } = await axios.post(`${URL}login`, userInfo)
        const status: boolean = data.status
        if (status) {
          localStorage.setItem('token', data.data.token)
          setErrors([])
          setUser(data.data)
          setLoading(false)
          setModalOpen(false)
        } else {
          const message: string = data.message
          setErrors([message])
          setLoading(false)
        }
      } catch (validationError: any) {
        const errors = validationError.errors
        setErrors(errors)
        setLoading(false)
      }
    } catch (err: any) {
      const { message } = err.response?.data
      setErrors([message])
      console.log(err)
    }
  }

  // Function to handle user logout
  const logout: any = async (): Promise<void> => {
    const token = localStorage.getItem('token')
    try {
      // const data = await axios.post(`${URL}logout`,
      //   {
      //     headers: {
      //       Authorization: `${token}`
      //     }
      //   })
      // console.log(data)
      if (token === null) {
        setErrors(['انت غير مصرح به'])
      } else {
        localStorage.removeItem('token')
        setUser(null)
        navigate('/')
      }
    } catch (err: any) {
      console.log(err)
    }
  }

  // Function to get user information
  const getUser: any = async (): Promise<void> => {
    const token = localStorage.getItem('token')
    try {
      if (token === null) {
        setUser(null)
      } else {
        const { data: { data: loggedUser } } = await axios.get(`${URL}profile`, {
          headers: {
            Authorization: `${token}`
          }
        })
        setUser(loggedUser)
      }
    } catch (err: any) {
      setUser(null)
      const { message } = err.response?.data
      setErrors([message])
      console.log(err)
    }
  }

  // Create a memoized object containing the functions and state variables
  const memoizedUser = useMemo(
    () => ({
      user,
      errors,
      setErrors,
      isModalOpen,
      setModalOpen,
      isLoading,
      setLoading,
      signup,
      login,
      logout,
      getUser
    }),
    [user,
      errors,
      isModalOpen,
      isLoading,
      logout,
      getUser
    ]
  )

  // Provide the memoizedUser value to the context
  return (
      <AuthContext.Provider value={memoizedUser}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
