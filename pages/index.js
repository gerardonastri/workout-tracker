import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';


export default function index() {
    const router = useRouter();
    const user = useSelector((state) => state.user.currentUser)
    useEffect(() => {
       const pushUser = async () => {
          if(user !== null){
            router.push('/home')
          } else {
            router.push('/login')
          }
       }
       pushUser()
    }, [])
  return (
    <Navbar home={'home'} login={'login'} register={'register'} />
  )
}