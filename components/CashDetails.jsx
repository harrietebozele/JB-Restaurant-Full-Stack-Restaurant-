import styles from '../src/styles/CashDetails.module.css';
import { useState } from 'react';

const CashDetails = ({total, createOrder}) =>{
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const handleClick = () =>{
        createOrder({ customer,address,total,method:0 })

    }
    return(
        <div className = {styles.container}>
            <div className = {styles.wrapper}>
            <h1 className = {styles.title}>You will pay $10 after delivery.</h1>
            <div className = {styles.item}>
                <label className = {styles.label}>Name</label>
                <input placeholder = 'Jane Doe' type = 'text' className = {styles.input} onChange = {(e)=>setCustomer(e.target.value)}/>
            </div>
            <div className = {styles.item}>
                <label className = {styles.label}>Phone Number</label>
                <input placeholder = '(111)111-1111' type = 'text' className = {styles.input}/>
                </div>
            <div className = {styles.item}>
                <label className = {styles.label}>Address</label>
                <textarea
                rows = {5}
                placeholder = '1234 Ottawa St Toronto ON'
                type = 'text'
                className = {styles.textarea}
                onChange = {(e)=>setAddress(e.target.value)}
                />
            </div>
            <button className = {styles.button} onClick = {handleClick}>Place Order</button>
            </div>
        </div>
    )
}

export default CashDetails;