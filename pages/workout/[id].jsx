import WorkoutForm from '../../components/WorkoutForm'
import WorkoutElement from '../../components/WorkoutElement'
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {axiosReq} from '../../util/apiCalls'
import { useState } from 'react'

export default function Workout() {
  const [workout, setWorkout] = useState({})
  const { asPath } = useRouter()
  useEffect(() => {
      const getWorkout = async () => {
        //const id = asPath.split('/')[2];
        const id = location.pathname.split('/')[2]
        const res = await axiosReq.get(`workout`, {params: {id: id}})
        setWorkout(res.data)
      }
      getWorkout()
  }, [])

  return (
    <>
      <Navbar home={'home'}  logout={'logout'} />
      <WorkoutElement workout={workout} />
    </>
  )
}
