import styles from '../../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
const Login = () =>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error,setError] = useState(false);
    const router = useRouter();
    
    const handleClick = async () =>{
        try{
            await axios.post('https://jb-restaurant-full-stack-restaurant.vercel.app/api/login',{username,password});
            router.push('/admin');
        } catch(err){
            setError(true);
        }
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input 
                placeholder='Username'
                className={styles.input}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                placeholder='Password'
                className={styles.input}
                onChange={(e)=>setPassword(e.target.value)}
                type='password'
                />
                <button className = {styles.button} onClick = {handleClick}>Log In</button>
                {error && <span className = {styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
}
export default Login;