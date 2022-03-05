import styles from '../styles/WorkoutCard.module.css'
import Image from "next/image"
import Link from 'next/link'

const WorkoutCard = ({workout}) => {
    const StrengthSrc = 'https://active-tracker-yt.herokuapp.com/img/dumbbell-light-green.e9869f64.png';
    const CardioSrc = 'https://active-tracker-yt.herokuapp.com/img/running-light-green.599f4302.png';
    return (
       <div className={styles.container}>
           <Link href={`/workout/${workout._id}`} passHref className={styles.link}>
           {workout.type === 'strength' ? (
               <Image loader={() => StrengthSrc} src={StrengthSrc} className={styles.img} alt="img" width={130} height={90} />
           ) : (
                <Image loader={() => CardioSrc} src={CardioSrc} className={styles.img} alt="img" width={130} height={90} />
           )}
           </Link>
           <span className={styles.type}>{workout.type}</span>
           <h2 className={styles.name}>{workout.title}</h2>
       </div>
    )
}

export default WorkoutCard