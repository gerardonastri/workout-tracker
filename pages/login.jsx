import Form from '../components/Form'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <>
        <Navbar home={'home'}  register={'register'} />
        <Form type={'login'} />
    </>
  )
}
