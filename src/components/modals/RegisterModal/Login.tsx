import React from 'react'
import type IRegister from './RegisterInterface'
import Message from '../../../assets/MessageIcon.png'
import Lock from '../../../assets/Lock.png'
import Show from '../../../assets/View_hide.png'
import loading from '../../../assets/loading.gif'
import { useAuth } from '../../../Auth/auth'

export default function Login ({ buttonText, isPasswordShow, togglePassword }: IRegister): any {
  const { login, errors, isLoading } = useAuth()

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const userInfo = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }

    try {
      login(userInfo)
    } catch (err: any) {
      console.error('Signup failed', err)
    }
  }

  return (
          <>
          {errors.length > 0 && (
          <ul className='-mb-[30px]'>
            {errors.map((error, index) => (
              <li key={index} className='text-red-600'>{error}</li>
            ))}
          </ul>
          )}
            <form onSubmit={handleLogin}>
            <div className='mt-[33px]'>
              <label htmlFor='email'>الايميل</label><br />
              <div className='relative mt-2'>
              <img src={Message} alt="Message" className="absolute right-4 top-1/2 transform -translate-y-1/2"/>
              <input id='email' name='email' type='email' placeholder='أدخل الايميل' className='h-[56px] w-full border-2 rounded-xl p-4 pr-12 placeholder:text-[#CCD2E3]'/>
              </div>
            </div>
            <div className='mt-[17px]'>
              <label htmlFor='password'>كلمة المرور</label><br />
              <div className='relative mt-2'>
              <img src={Lock} alt="lock" className="absolute right-4 top-1/2 transform -translate-y-1/2"/>
              <input id='password' name='password' type={!isPasswordShow ? 'password' : 'text'} placeholder='أدخل كلمة المرور' className='h-[56px] w-full border-2 rounded-xl p-4 pr-12 placeholder:text-[#CCD2E3]'/>
              <img src={Show} alt="Show_Hide" onClick={togglePassword} className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
              </div>
            </div>
            {isLoading
              ? <button type='button' className='w-full border h-[56px] rounded-full mt-8 bg-white border-[#00ADEE] flex justify-center'><img src={loading} alt='loading' className='h-full text-white'/></button>
              : <button type='submit' className='w-full bg-[#00ADEE] border text-white text-lg h-[56px] rounded-full mt-8 hover:bg-white hover:text-[#00ADEE] hover:border-[#00ADEE]'>{buttonText}</button>
          }
          </form>
          </>
  )
}
