import React from 'react'
import type IRegister from './RegisterInterface'
import Usar from '../../../assets/User.png'
import Message from '../../../assets/MessageIcon.png'
import Phone from '../../../assets/Phone_duotone.png'
import Lock from '../../../assets/Lock.png'
import Show from '../../../assets/View_hide.png'

export default function Signup ({ buttonText, buttonAction, isPasswordShow, togglePassword }: IRegister): JSX.Element {
  return (
          <>
          <form onSubmit={buttonAction}>
          <div className='mt-[33px]'>
              <label htmlFor='name'>الاسم</label><br />
              <div className='relative mt-2'>
              <img src={Usar} alt="user" className="absolute right-4 top-1/2 transform -translate-y-1/2"/>
              <input id='name' name='name' type='text' placeholder='أدخل الاسم' className='h-[56px] w-full border-2 rounded-xl p-4 pr-12 placeholder:text-[#CCD2E3]'/>
              </div>
            </div>
            <div className='mt-[17px]'>
              <label htmlFor='email'>الايميل</label><br />
              <div className='relative mt-2'>
              <img src={Message} alt="Message" className="absolute right-4 top-1/2 transform -translate-y-1/2"/>
              <input id='email' name='email' type='email' placeholder='أدخل الايميل' className='h-[56px] w-full border-2 rounded-xl p-4 pr-12 placeholder:text-[#CCD2E3]'/>
              </div>
            </div>
            <div className='mt-[17px]'>
              <label htmlFor='phone'>رقم الجوال</label><br />
              <div className='relative mt-2'>
              <img src={Phone} alt="Phone" className="absolute right-4 top-1/2 transform -translate-y-1/2"/>
              <input id='phone' name='phone' type='number' placeholder='رقم الجوال' className='h-[56px] w-full border-2 rounded-xl p-4 pr-12 placeholder:text-[#CCD2E3]'/>
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
           <button type='submit' className='w-full bg-[#00ADEE] border text-white text-lg h-[56px] rounded-full mt-8 hover:bg-white hover:text-[#00ADEE] hover:border-[#00ADEE]'>{buttonText}</button>
          </form>
          </>
  )
}
