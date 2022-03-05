import styles from '../styles/Navbar.module.css'
import Image from "next/image"
import Link from 'next/link'

const Navbar = (props) => {
    const values = (Object.values(props));
    const src = 'https://active-tracker-yt.herokuapp.com/img/dumbbell-light.ef471ab1.png';
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image loader={() => src} src={src} alt="" width={70} height={40} />
                <h1>Workout Tracker</h1>
            </div>
            <div className={styles.links}>
                {values.map(prop => (
                    <Link className={styles.link} key={prop} href={`/${prop}`} passHref >{prop}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar
