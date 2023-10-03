import React from 'react'

export default function ContactForm (): JSX.Element {
  return (
    <form>

      {/* Service Inputs */}
      <div>
        <label htmlFor='service' className='text-lg'>
          الخدمة
        </label>
        <input id="service" className="h-[50px] border border-solid border-1 w-[100%] p-2 rounded-xl mt-2" type='text' placeholder='اسم الخدمة' />
      </div>
      <div className='flex gap-6'>
        <div className='w-[100%] md:w-[50%]'>
          <div>
            <label htmlFor='name' className='text-lg'>
              الاسم
            </label>
          </div>
          <input id="name" className="h-[50px] border border-solid border-1 p-2 rounded-xl w-[100%] mt-2" type='text' placeholder=' الاسم' />
        </div>
        <div className='w-[100%] md:w-[50%] mt-4 md:mt-0'>
          <div>
            <label htmlFor='phone' className='text-lg'>
              رقم الجوال
            </label>
          </div>
          <input id="phone" className="h-[50px] border border-solid border-1 p-2 rounded-xl w-[100%] mt-2" type='number' placeholder=' رقم الجوال' />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='text-lg'>
          الرسالة
        </label>
      </div>
      <textarea id="message" placeholder='اكتب رسالتك هنا...' className="border border-solid border-1 w-[100%] h-24 p-2 rounded-xl mt-2"></textarea>

      {/* Submit Button */}
      <button className='text-xl w-[150px] h-[50px] border border-solid border-3 rounded-full bg-primary text-white hover:border-primary font-bold hover:text-primary hover:bg-white mt-8'>ارسل</button>
    </form>
  )
}
