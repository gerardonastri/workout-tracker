import Form from '../components/Form'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import {logoutSuccess, logoutFailure} from '../redux/userSlice'
import {useRouter} from 'next/router'
import { useEffect } from 'react';


export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        const pushUser = () => {
            dispatch(logoutSuccess())
            router.push('/login')
        }
        pushUser()
    }, [])
  return (
    <>
        <Navbar home={'home'}  register={'register'} />
    </>
  )
}
