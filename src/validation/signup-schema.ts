import { object, string } from 'yup'

export default object({
  name: string().trim().min(3, 'يجب ان يكون اسمك يحتوي على 3 أحرف على الأقل').max(50, 'يجب أن لا يتعدى اسمك ال50 حرف').required('يجب عليك ادخال اسمك'),
  email: string().trim().email('أرجو ادخال ايميل صالح').required('يجب عليك ادخال الايميل'),
  password: string().trim().min(6, 'يجب ان لا تقل كلمة المرور عن 6 احرف').required('يجب عليك اخال كلمة المرور'),
  phone: string().length(10, 'أرجو ادخال رقم هاتف صالح')
})
