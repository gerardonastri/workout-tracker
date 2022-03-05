import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import WorkoutCard from '../components/WorkoutCard'
import styles from '../styles/Home.module.css'
import {axiosReq} from '../util/apiCalls'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import {useRouter} from 'next/router'


export default function Home() {
  const user = useSelector((state) => state.user.currentUser?.user)
  const router = useRouter();
  useEffect(() => {
    const pushUser = async () => {
       if(user == null) {
         router.push('/login')
       }
    }
    pushUser()
 }, [])

  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await axiosReq.get(`workouts${'?user='}${user._id}`);
        setWorkouts(res.data)
    } catch (error) {
        console.log(error);
    }
    }
    getWorkouts()
  }, [])
  return (
    <>
    <Navbar create={'create'} logout={'logout'} />
    {workouts.length > 0 ? (
      <div className={styles.workoutCardsContainer}>
        {workouts.map((workout) => (
          <WorkoutCard workout={workout}/>
        ))}
      </div>
    ) : (
        <div className={styles.noWorkouts}>
          <h1>Looks empty here...</h1>
          <Link href='/create' passHref>
            <button className={styles.button}>Create Workout</button>
          </Link>
        </div>
    )}
    
    </>
  )
}
