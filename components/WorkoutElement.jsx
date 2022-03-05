import styles from '../styles/Workout.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {axiosReq} from '../util/apiCalls'
import {useRouter} from 'next/router'


const WorkoutElement= ({workout}) => { 
    const [showSettings, setShowSettings] = useState(false);
    const router = useRouter();

 const StrengthSrc = 'https://active-tracker-yt.herokuapp.com/img/dumbbell-light-green.e9869f64.png';
 const CardioSrc = 'https://active-tracker-yt.herokuapp.com/img/running-light-green.599f4302.png';

    const handleDelete = async () => {
        if(window.confirm('Are you sure you want to delete the workout?')){
           try {
            const res = await axiosReq.delete(`workout?id=${workout._id}`)
            router.push('/home')
           } catch (error) {
               console.log(error);
           }
        }
    }   

    return (
        <>
        {showSettings ? (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.up}>
                        {workout.type === 'strength' ? (
                            <Image loader={() => StrengthSrc} src={StrengthSrc} className={styles.img} alt="img" width={130} height={90} />
                        ) : (
                            <Image loader={() => CardioSrc} src={CardioSrc} className={styles.img} alt="img" width={100} height={90} />
                        )}
                        <span>{workout.type}</span>
                        <input className={styles.input} type="text" name="name" id="name" value={workout.title} placeholder={workout.title} />
                        <button className={styles.settings} onClick={() => setShowSettings((prev) => !prev)}><EditOutlinedIcon/></button>
                        <button className={styles.delete} onClick={handleDelete}><DeleteOutlineOutlinedIcon/></button>
                    </div>
                    {workout.type === 'cardio' ? (
                        <div className={styles.downContainer}>
                        {workout?.exercises?.map((exercise) => (
                            <div className={styles.down}>
                                <div className={styles.group}>
                                    <span>Exercise</span>
                                    <input className={styles.inputSm} type="text" name='name' id='name' placeholder={exercise.name} />
                                </div>
                                <div className={styles.group}>
                                    <span>Distance(km)</span>
                                    <input className={styles.inputSm} type="number" name='name' id='name'  placeholder={exercise.distance} />
                                </div>
                                <div className={styles.group}>
                                    <span>Duration(min)</span>
                                    <input className={styles.inputSm} type="number" name='name' id='name'  placeholder={exercise.duration} />
                                </div>
                                <div className={styles.group}>
                                    <span>Pace</span>
                                    <input className={styles.inputSm} type="number" name='name' id='name' placeholder={exercise.pace} />
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div className={styles.downContainer}>
                        {workout?.exercises?.map((exercise) => (
                        <div className={styles.down}>
                            <div className={styles.group}>
                                <span>Exercise</span>
                                <input className={styles.inputSm} type="text" name='name' id='name' placeholder={exercise.name} />
                            </div>
                            <div className={styles.group}>
                                <span>Sets</span>
                                <input className={styles.inputSm} type="number" name='name' id='name' placeholder={exercise.sets} />
                            </div>
                            <div className={styles.group}>
                                <span>reps</span>
                                <input className={styles.inputSm} type="number" name='name' id='name' placeholder={exercise.reps} />
                            </div>
                            <div className={styles.group}>
                                <span>Weight(kg)</span>
                                <input className={styles.inputSm} type="number" name='name' id='name'  placeholder={exercise.weight} />
                            </div>
                        </div>
                        ))}
                        </div>
                    )}
                    <button className={styles.button}>Update Workout</button>
                </div>
            </div>
        ) : (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.up}>
                        {workout.type === 'strength' ? (
                            <Image loader={() => StrengthSrc} src={StrengthSrc} className={styles.img} alt="img" width={130} height={90} />
                        ) : (
                            <Image loader={() => CardioSrc} src={CardioSrc} className={styles.img} alt="img" width={100} height={90} />
                        )}
                        <span>{workout.type}</span>
                        <h2>{workout.title}</h2>
                        <button className={styles.settings} onClick={() => setShowSettings((prev) => !prev)}><EditOutlinedIcon/></button>
                        <button className={styles.delete} onClick={handleDelete}><DeleteOutlineOutlinedIcon/></button>
                    </div>
                    {workout.type === 'cardio' ? (
                        <div className={styles.downContainer}>
                        {workout?.exercises?.map((exercise) => (
                            <div className={styles.down}>
                                <div className={styles.group}>
                                    <span>Exercise</span>
                                    <p>{exercise.name}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Distance(km)</span>
                                    <p>{exercise.distance}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Duration(min)</span>
                                    <p>{exercise.duration}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Pace</span>
                                    <p>{exercise.pace}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div className={styles.downContainer}>
                        {workout?.exercises?.map((exercise) => (
                            <div className={styles.down}>
                                <div className={styles.group}>
                                    <span>Exercise</span>
                                    <p>{exercise.name}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Sets</span>
                                    <p>{exercise.sets}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Reps</span>
                                    <p>{exercise.reps}</p>
                                </div>
                                <div className={styles.group}>
                                    <span>Weight(kg)</span>
                                    <p>{exercise.weight}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    )}
                
                </div>
            </div>
        )}
        </>
    )
}

export default WorkoutElement