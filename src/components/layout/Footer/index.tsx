import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineGoogle } from 'react-icons/ai'
import logo from '../../../assets/logo.png'
import phone from '../../../assets/Phone.png'
import message from '../../../assets/Message.png'
import street from '../../../assets/street.png'
import pin from '../../../assets/Pin.png'

export default function Footer (): JSX.Element {
  return (
    <div className='bg-[#E5F7FD] max-w-[1240px] mx-auto py-8 px-12 md:px-12 rounded-2xl'>

      {/* Company Info */}
      <div className='flex flex-col md:flex-row justify-around'>
      <div className='max-w-full md:max-w-[25%] mb-8 md:mb-0'>
        <div className='flex items-center mb-5'>
          <p className='text-3xl font-bold'>
            كلين <span className="text-blue-400">ستيد</span>
          </p>
          <img
            src={logo}
            alt="logo"
            className='p-1 ml-2'
          />
        </div>
        <p className='text-[#7D7E82]'>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
        </p>
      </div>

       {/* Services */}
      <div className='max-w-full md:max-w-[25%]'>
        <h2 className='font-bold text-lg'>خدماتنا</h2>
        <ul className='text-[#7D7E82]'>
          <li className='pb-2 pt-4'>تنظيف المنازل</li>
          <li className='pb-2'>التنظيف التجاري</li>
          <li className='pb-2'>تنظيف السجاد</li>
          <li className='pb-2'>تنظيف النوافذ</li>
          <li className='pb-2'>تنظيف السيارات</li>
          <li className='pb-2'>تنظيف بعد البناء</li>
        </ul>
      </div>

      {/* Contact */}
      <div className='max-w-full md:max-w-[25%]'>
        <h2 className='font-bold text-lg'>تواصل معنا</h2>
        <div className='flex pt-4 pb-2 text-[#7D7E82]'>
          <img src={phone} alt="phone" />
          <p>0597924632</p>
        </div>
        <div className='flex text-[#7D7E82]'>
          <img src={message} alt="phone" />
          <p>khaled.s.elkhudary@gmail.com</p>
        </div>
      </div>

      {/* Social Media */}
      <div className='max-w-full md:max-w-[25%]'>
        <h2 className='font-bold text-lg'>تابعونا على</h2>
        <div className='flex pt-4 pb-8 text-2xl text-[#7D7E82] gap-3'>
          <AiOutlineFacebook />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
          <AiOutlineWhatsApp />
          <AiOutlineInstagram />
          <AiOutlineGoogle />
        </div>
        <div className='flex items-center'>
          <img src={pin} alt="pin" className='mr-1' />
        <img src={street} alt="street" />
        </div>
      </div>
    </div>

    {/* Horizontal Line */}
    <div className='h-0.5 bg-white my-5'>
    </div>

    {/* Copyright */}
    <div className='text-center'>
      <p className='font-bold text-lg'>جميع الحقوق محفوظة © 2022 </p>
    </div>
    </div>
  )
}
