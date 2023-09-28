interface IUser {
  id: number
  name: string
  email: string
  phone: string
  image: string
  points: number
  credits: number
  token: string
}

interface IUserInfo {
  name?: string
  email: string
  phone?: string
  password: string
}

interface IAuthContext {
  user: IUser | null
  isModalOpen: boolean
  isLoading: boolean
  errors: string[]
  signup: (_: IUserInfo) => void
  login: (_: IUserInfo) => void
  logout: () => void
  getUser: () => void
  setModalOpen: (_: boolean) => void
  setLoading: (_: boolean) => void
  setErrors: (_: string[]) => void
}

export type { IUser, IUserInfo, IAuthContext }
