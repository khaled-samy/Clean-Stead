import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterModal } from 'components'
import { NavMobile, NavDesktop } from './components'
import { logo } from 'assets'
import { useAuth } from 'auth'

export default function Header (): JSX.Element {
  const [nav, setNav] = useState<boolean>(false)
  const { isModalOpen, setModalOpen, setErrors, user, logout } = useAuth()

  const handleNav = (): void => {
    setNav(!nav)
  }

  const handleModal = (): void => {
    setErrors([])
    setModalOpen(!isModalOpen)
  }

  return (
    <div className="flex justify-between items-center h-[50px] mt-[30px] mb-[40px]">

      {/* Mobile Menu */}
      <NavMobile nav={nav} handleNav={handleNav}/>

      {/* Logo Section */}
      <Link to={'/'}>
        <div className="md:flex gap-2 font-bold hidden">
          <img src={logo} alt="logo" className='w-[30.5px] h-[31px] mt-2'/>
          <p className='text-[25px]'>
            كلين <span className="text-blue-400">ستيد</span>
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <NavDesktop />

      <div className='flex gap-2'>
        {user === null
          ? <button onClick={handleModal} className="w-[120px] h-[50px] border border-solid border-3 rounded-full text-primary border-primary font-bold hover:text-white hover:bg-primary py-2.5 px-6">
                  دخول
                </button>
          : <button onClick={logout} className="w-[120px] h-[50px] border border-solid border-3 rounded-full text-primary border-primary font-bold hover:text-white hover:bg-primary py-2.5 px-6">
      خروج
    </button>
      }

        <button className="w-[120px] h-[50px] border border-solid border-3 rounded-full bg-primary text-white hover:border-primary font-bold hover:text-primary hover:bg-white py-2.5 px-6">
          <Link to='/book'>
          احجز الآن
          </Link>
        </button>
      </div>

      {isModalOpen && <RegisterModal onClose={handleModal} />}
    </div>
  )
}
