import styles from "../src/styles/Navbar.module.css"
import Image from 'next/image'
import { useSelector } from "react-redux"
import Link from "next/link"
const Navbar = () =>{

    const quantity = useSelector(state=>state.cart.quantity);
    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
            <div className = {styles.callButton}>
                <Image src = '/img/phone.png' alt = '' width = '42' height = '42'/>
            </div>
            <div className = {styles.texts}>
            <div className = {styles.text}>ORDER NOW!</div>
            <div className = {styles.text}>012 345 678</div>
            </div>
            </div>
            <div className = {styles.item}>
                <ul className = {styles.list}>
                <Link style = {{textDecoration: 'none', color:'black'}} href = '/' passHref>
                   <li className = {styles.listItem}>Homepage</li>
                    </Link>
                    <li className = {styles.listItem}>Products</li>
                    <Image src = '/img/pngburger.png' alt = '' width = '160' height = '69' />
                    <li className = {styles.listItem}>Menu</li>
                    <Link href = '/admin' style = {{textDecoration: 'none', color:'black'}}>
                    <li className = {styles.listItem}>Admin</li>
                    </Link>
                </ul>
            </div>
            <Link href = '/cart' passHref>
            <div className = {styles.item}>
                <div className = {styles.cart}>
                    <Image src = '/img/cart.png' alt = '' width = '30' height = '30' />
                
                <div className = {styles.counter}>{quantity}</div>
            </div>
            </div>
            </Link>
        </div>
        
    )
}

export default Navbar