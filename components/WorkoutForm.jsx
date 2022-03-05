import styles from '../styles/Form.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import {axiosReq} from '../util/apiCalls'
import { useSelector } from 'react-redux';
import {useRouter} from 'next/router'

const WorkoutForm = () => {
    const user = useSelector((state) => state.user.currentUser.user)
    const router = useRouter();
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [exercises, setExercises] = useState([])

    const [name, setName] = useState('')
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const [distance, setDistance] = useState(0)
    const [duration, setDuration] = useState(0)
    const [pace, setPace] = useState(0)
    {/*END OF USESTATE*/}

    const handleSubmit = async () => {
        try {
            const res = await axiosReq.post(`workouts${'?user='}${user._id}`, {
                title,
                type,
                exercises,
                user
            });
            router.push('/home')
        } catch (error) {
            console.log(error);
        }
    }
    const AddExercise = () => {
        const obj = {
            name,
            sets,
            reps,
            weight,
            distance,
            duration, 
            pace
        }
        setExercises([...exercises, obj])
        setName('')
        setSets(0)
        setReps(0)
        setWeight(0)
        setDistance(0)
        setDuration(0)
        setPace(0)
    }
   return (
       <div className={styles.container}>
           <div className={styles.wrapper}>
            <h1>Record Workout</h1>
            <div className={styles.inputContainer}>
                    <div className={styles.inputGroup}>
                    <label htmlFor="workoutName">Workout Name</label>
                    <input className={styles.input} type="text" id='workoutName' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="type">Workout type</label>
                    <select className={styles.select} name="type" id="type"  onChange={(e) => setType(e.target.value)}>
                        <option selected={true} disabled="disabled">Select Workout</option>
                        <option value="strength">Strength</option>
                        <option value="cardio">Cardio</option>
                    </select>
                    
                </div>
                {exercises.length > 1 && (
                    <>
                    </>
                )}
                {type === 'strength' ? (
                    <>
                    {exercises.length > 0 && exercises.map((exercise) => (
                        <div className={styles.exercise_inputGroup}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="exercise">Exercise</label>
                                <input type="text" name="name" id="exercise" placeholder={exercise.name} />
                            </div>
                        <div className={styles.inputGroup}>
                                <label htmlFor="sets">Sets</label>
                                <input type="number" name="sets" id="sets" placeholder={exercise.sets} />
                        </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="reps">Reps</label>
                                <input type="number" name="reps" id="reps" placeholder={exercise.reps} />
                            </div>
                        <div className={styles.inputGroup}>
                                <label htmlFor="weight">Weight(Kg)</label>
                                <input type="number" name="weight" id="weight" placeholder={exercise.weight} />
                        </div>
                        </div>
                    ))}
                    <div className={styles.exercise_inputGroup}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="exercise">Exercise</label>
                            <input type="text" name="name" id="exercise" value={name}   onChange={(e) => setName(e.target.value)} />
                        </div>
                       <div className={styles.inputGroup}>
                            <label htmlFor="sets">Sets</label>
                            <input type="number" name="sets" id="sets" value={sets}   onChange={(e) => setSets(parseInt(e.target.value))} />
                       </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="reps">Reps</label>
                            <input type="number" name="reps" id="reps" value={reps}   onChange={(e) => setReps(parseInt(e.target.value))} />
                        </div>
                       <div className={styles.inputGroup}>
                            <label htmlFor="weight">Weight(Kg)</label>
                            <input type="number" name="weight" id="weight" value={weight}   onChange={(e) => setWeight(parseInt(e.target.value))} />
                       </div>
                    </div>
                    <button style={{marginBottom: '20px'}} className={styles.button} onClick={AddExercise}>Add Exercise</button>
                    </>
                ) : (
                    <></>
                )}
                {type === 'cardio' ? (
                    <>
                     {exercises.length > 0 && exercises.map((exercise) => (
                        <div className={styles.exercise_inputGroup}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="exercise">Exercise</label>
                                <input type="text" name="name" id="exercise" placeholder={exercise.name} />
                            </div>
                            <div className={styles.inputGroup}>
                                    <label htmlFor="sets">Distance(km)</label>
                                    <input type="number" name="sets" id="sets" placeholder={exercise.distance} />
                            </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="reps">Duration(min)</label>
                                    <input type="number" name="reps" id="reps" placeholder={exercise.duration} />
                                </div>
                            <div className={styles.inputGroup}>
                                    <label htmlFor="weight">Pace</label>
                                    <input type="number" name="weight" id="weight" placeholder={exercise.pace} />
                            </div>
                        </div>
                    ))}
                    <div className={styles.exercise_inputGroup}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="exercise">Exercise</label>
                            <input type="text" name="name" id="exercise" value={name}  onChange={(e) => setName(e.target.value)} />
                        </div>
                       <div className={styles.inputGroup}>
                            <label htmlFor="distance">Distance(km)</label>
                            <input type="number" name="distance" id="distance" value={distance}   onChange={(e) => setDistance(parseInt(e.target.value))}/>
                       </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="duration">Duration(min)</label> 
                            <input type="number" name="duration" id="duration" value={duration}  onChange={(e) => setDuration(parseInt(e.target.value))}/>
                        </div>
                       <div className={styles.inputGroup}>
                            <label htmlFor="pace">Pace</label>
                            <input type="number" name="pace" id="pace" value={pace}  onChange={(e) => setPace(parseInt(e.target.value))}/>
                       </div>
                    </div>
                    <button style={{marginBottom: '20px'}} className={styles.button} onClick={AddExercise}>Add Exercise</button>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <button className={styles.button} onClick={handleSubmit}>Record Workout</button>
           </div>
       </div>
   )
}

export default WorkoutForm