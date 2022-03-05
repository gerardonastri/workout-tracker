import styles from '../styles/Form.module.css'
import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import {axiosReq} from '../util/apiCalls'
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from "../redux/userSlice";
import {useRouter} from 'next/router'

const Form = ({type}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await axiosReq.post('login', {
                email,
                password
            });
            dispatch(loginSuccess(res.data))
            router.push('/')
        } catch (error) {
            console.log(error);
            dispatch(loginFailure())
        }
    }
    const handleRegister = async () => {
        try {
            const res = await axiosReq.post('register', {
                email,
                password,
                username
            });
            router.push('/login')
        } catch (error) {
            console.log(error);
        }
    }

   return (
       <div className={styles.container}>
           <div className={styles.wrapper}>
            <h1>{type === 'login' ? 'Login' : 'Register'}</h1>
            <div className={styles.inputContainer}>
                {type === 'register' ? (
                    <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input className={styles.input} type="text" id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                ) : (
                    <></>
                )}
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.input} type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button className={styles.button} onClick={type === 'login' ? handleLogin : handleRegister}>{type === 'login' ? 'Login' : 'Register'}</button>
            {type === 'login' ? (
                <>
                <p>Don't have an account? <Link className={styles.color} href={'/register'} passHref>Register</Link></p>
                </>
            ) : (
                <>
                    <p>Already have an account? <Link href={'/login'} passHref>Login</Link></p>
                </>
            )}
           </div>
       </div>
   )
}

export default Form
