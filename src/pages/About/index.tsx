import React from 'react'
import { Container, BriefSection } from '../../components'

const AboutProps = {
  title: 'من نحن',
  content: (
    <>
  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
  {React.createElement('br')}
  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية
    </>
  ),
  buttonText: 'تواصل معنا',
  linkTo: '/contact'
}

export default function About (): JSX.Element {
  return (
    <Container>
    {/* About Information Section */}
      <BriefSection title={AboutProps.title} content={AboutProps.content} buttonText={AboutProps.buttonText} linkTo={AboutProps.linkTo} />
  </Container>
  )
}
