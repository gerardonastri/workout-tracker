import WorkoutForm from '../components/WorkoutForm'
import Navbar from '../components/Navbar'
import {useRouter} from 'next/router'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Create() {
  const router = useRouter();
  const user = useSelector((state) => state.user.currentUser)
  
  useEffect(() => {
    const pushUser = async () => {
       if(user == null) {
         router.push('/login')
       }
    }
    pushUser()
 }, [])
  return (
    <>
    
        <Navbar home={'home'}  logout={'logout'} />
       {user != null &&  <WorkoutForm/>}
    </>
  )
}
