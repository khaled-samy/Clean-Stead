import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ImageSection } from '../../components'
import groub from '../../assets/Group.png'

export default function About (): JSX.Element {
  return (
    <Container>
    <div className='max-w-[1240px] mx-auto px-4 mb-12 flex flex-col md:flex-row md:justify-between'>

    {/* About Information Section */}
    <div className='md:w-[50%] md:mt-10'>
      <div className='flex mb-6'>
        <h1 className='font-bold text-[40px] pl-2'>من نحن</h1>
        <img className='mt-6 w-[20px] h-[34px]' src={groub} alt="groub" />
      </div>
      <p className='max-w-lg text-[25px] text-[#7D7E82]'>
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.<br />
      إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
      </p>
      <Link to="/contact">
        <button className='mt-8 w-[150px] h-[50px] border border-solid border-3 rounded-full border-[#00ADEE] text-xl font-bold text-[#00ADEE] hover:bg-[#00ADEE] hover:text-white hover:border-white'>تواصل معنا</button>
      </Link>
    </div>

    {/* Image Section */}
    <ImageSection />
  </div>
  </Container>
  )
}
