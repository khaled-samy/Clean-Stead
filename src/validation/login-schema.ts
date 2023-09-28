import { object, string } from 'yup'

export default object({
  email: string().trim().email('أرجو ادخال ايميل صالح').required('يجب عليك ادخال الايميل'),
  password: string().trim().min(6, 'يجب ان لا تقل كلمة المرور عن 6 احرف').required('يجب عليك اخال كلمة المرور')
})
