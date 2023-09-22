import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

interface RegisterModalProps {
  onClose: () => void
}

export default function RegisterModal ({ onClose }: RegisterModalProps): JSX.Element {
  const [isHasAccount, setHasAccount] = useState<boolean>(true)
  const [isPasswordShow, setPasswordShow] = useState<boolean>(false)

  const togglePassword = (): void => {
    setPasswordShow(!isPasswordShow)
  }

  // Handle register form submit
  const register = (e: React.FormEvent): void => {
    e.preventDefault()
    isHasAccount ? console.log('Log in Succeessfully') : console.log('Sign up Succeessfully')
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Semi-transparent background */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>

      {/* Register Modal */}
      <div className="bg-white py-[30px] px-[50px] rounded-lg relative z-50">

        {/* Header */}
        <div className='flex gap-8'>
        <button className='text-xl font-bold text-[#CCD2E3]' onClick={onClose}>&#10005;</button>
        <h1 className='text-xl font-bold '>{isHasAccount ? 'من فضلك قم بتسجيل الدخول للاستمرار' : 'من فضلك قم بانشاء حساب للاستمرار'}</h1>
        </div>

        {/* Tap Buttons */}
        <div className='flex justify-center h-[50px] mt-8 w-[400px] border-b-2 border-[#F2F2F2]'>
          <div className={`flex items-center justify-center w-[120px] ${!isHasAccount ? 'text-[#00ADEE] border-b-4 border-[#00ADEE]' : 'text-black'}`}>
        <button onClick={() => { setHasAccount(false) }}>انشاء حساب</button>
          </div>
        <div className='bg-[#F2F2F2] w-0.5 m-2 mx-[50px]'></div>
        <div className={`flex items-center justify-center w-[120px] ${isHasAccount ? 'text-[#00ADEE] border-b-4 border-[#00ADEE]' : 'text-black'}`}>
        <button onClick={() => { setHasAccount(true) }}>تسجيل الدخول</button>
        </div>
        </div>

        {/* Login and Signup components */}
        {isHasAccount
          ? <Login buttonText='دخول' buttonAction={register} isPasswordShow={isPasswordShow} togglePassword={togglePassword}/>
          : <Signup buttonText='انشاء حساب' buttonAction={register} isPasswordShow={isPasswordShow} togglePassword={togglePassword}/>
      }
      </div>
    </div>
  )
}
