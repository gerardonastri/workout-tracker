import Form from '../components/Form'
import Navbar from '../components/Navbar'

export default function Register() {
  return (
    <>
        <Navbar home={'home'}  register={'login'} />
        <Form type={'register'} />
    </>
  )
}
