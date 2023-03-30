import styles from "../src/styles/Footer.module.css"
import Image from 'next/legacy/image'
const Footer = () =>{
    return(
        <div className = {styles.container}>
        <div className = {styles.item}>
            <Image src = '/img/bg.jpg' objectFit = 'cover' layout = 'fill' alt = ''/>
        </div>
        <div className = {styles.item}>
        <div className = {styles.card}>
            <h2 className = {styles.motto}>
                MADE FRESH DAILY WITH THE FINEST INGREDIENTS!!
            </h2>
        </div>
        <div className = {styles.card}>
            <h1 className = {styles.title}>FIND A LOCATION NEAR YOU!</h1>
            <p className = {styles.text}>
                1234 Toronto Ave 
                <br /> Toronto, M1M 2M2
                <br /> (123) 456-7891
            </p>
            <p className = {styles.text}>
                5678 Toronto Ave 
                <br /> Toronto, M2M 3M3
                <br /> (234) 567-8912
            </p>
            <p className = {styles.text}>
                6789 Toronto Ave 
                <br /> Toronto, M3M 4M4
                <br /> (345) 678-9123
            </p>
            <p className = {styles.text}>
                7891 Toronto Ave 
                <br /> Toronto, M4M 5M5
                <br /> (456) 789-1234
            </p>
        </div>
        <div className = {styles.card}>
        <h1 className = {styles.title}>HOURS OF OPERATION</h1>
        <p className = {styles.text}>
                MONDAY-SUNDAY
                <br /> 8:00 - 1:00
            </p>
        </div>
        </div>
        </div>
    );
};

export default Footer