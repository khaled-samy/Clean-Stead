import React from 'react'

export default function ContactForm (): JSX.Element {
  return (
    <form>

      {/* Service Inputs */}
      <div>
        <label htmlFor='service' className='text-xl'>
          الخدمة
        </label>
        <input id="service" className="border border-solid border-1 w-[100%] p-2 rounded-xl mt-2" type='text' placeholder='اسم الخدمة' />
      </div>
      <div className='flex'>
        <div className='w-[100%] md:w-[50%]'>
          <div>
            <label htmlFor='name' className='text-xl'>
              الاسم
            </label>
          </div>
          <input id="name" className="border border-solid border-1 p-2 rounded-xl w-[100%] mt-2" type='text' placeholder=' الاسم' />
        </div>
        <div className='w-[100%] md:w-[50%] mt-4 md:mt-0'>
          <div>
            <label htmlFor='phone' className='text-xl'>
              رقم الجوال
            </label>
          </div>
          <input id="phone" className="border border-solid border-1 p-2 rounded-xl w-[100%] mt-2" type='number' placeholder=' رقم الجوال' />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='text-xl'>
          الرسالة
        </label>
      </div>
      <textarea id="message" placeholder='اكتب رسالتك هنا...' className="border border-solid border-1 w-[100%] h-24 p-2 rounded-xl mt-2"></textarea>

      {/* Submit Button */}
      <button className='p-4 px-12 border border-solid border-3 rounded-full bg-[#00ADEE] text-white hover:border-[#00ADEE] font-bold hover:text-[#00ADEE] hover:bg-white mt-8'>ارسل</button>
    </form>
  )
}
