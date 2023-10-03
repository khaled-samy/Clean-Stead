import React, { useState } from 'react'
import { Container, BriefSection } from 'components'
import ServicesSection from './components/ServicesSection'

const ServicesProps = {
  title: 'تنظيف المنازل',
  content: (
    <>
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
      الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
      {React.createElement('br')}
      إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
      الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
    </>
  ),
  buttonText: 'احجز الآن',
  linkTo: '/book'
}

export default function Services (): JSX.Element {
  const [itemsNumber, setItemsNumber] = useState<number>(8)

  const showMoreItems = (): void => {
    setItemsNumber((prevCount) => prevCount + 8)
  }

  return (
    <Container>
      {/* Services Information Section */}
      <BriefSection
        title={ServicesProps.title}
        content={ServicesProps.content}
        buttonText={ServicesProps.buttonText}
        linkTo={ServicesProps.linkTo}
      />

      {/* Services Items Section */}
      <ServicesSection itemsNumber={itemsNumber} showMoreItems={showMoreItems}/>
    </Container>
  )
}
