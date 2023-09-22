export default interface IRegister {
  buttonText: string
  buttonAction: (e: any) => void
  isPasswordShow: boolean
  togglePassword: () => void
}
