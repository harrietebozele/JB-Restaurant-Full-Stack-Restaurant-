import styles from '../src/styles/BurgerCard.module.css'
import Image from 'next/legacy/image'
import Link from 'next/link'
const BurgerCard = ({ burger }) =>{
    return (
        <div className = {styles.container}>
            <Link href = {`/product/${burger._id}`} passHref>
            <Image src = {burger.img} alt = '' width = '500' height = '500'/>
            </Link>
            <h1 className = {styles.title}>{burger.title}</h1>
            <span className = {styles.price}>${burger.prices[0]}</span>
            <p className = {styles.desc}>
               {burger.desc}
            </p>

        </div>
    )
}
export default BurgerCard;