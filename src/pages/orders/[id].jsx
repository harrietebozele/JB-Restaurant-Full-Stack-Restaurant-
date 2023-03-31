import styles from '../../styles/Order.module.css';
import Image from 'next/legacy/image';
import axios from 'axios';

const Order = ({order}) =>{

    const status = order.status;
    const statusClass = (index) =>{
        if(index - status<1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;

    }
    return (
        <div className = {styles.container}>
            <div className = {styles.left}>
                <table className = {styles.table}>
                    <tbody>
                    <tr className = {styles.trTitle}>
                        <th>ORDER ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    </tbody>
                    
                    <tbody>
                    <tr className = {styles.tr}>
                        <td>
                            <span className = {styles.id}>{order._id}</span>
                        </td>
                        <td>
                            <span className = {styles.name}>{order.customer}</span>
                        </td>
                        <td>
                            <span className={styles.address}>{order.address}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${order.total}</span>
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
                <div className = {styles.row}>
                    <div className = {statusClass(0)}>
                        <Image src = '/img/payment.png' width = {30} height = {30} alt = ''/>
                        <span>Payment</span>
                        <div className = {styles.checkedIcon}>
                        <Image src = '/img/checkmark.png' width = {20} height = {20} alt = ''/>
                        </div>
                    </div>
                    <div className = {statusClass(1)}>
                        <Image src = '/img/preparation.png' width = {30} height = {30} alt = ''/>
                        <span>Preparing</span>
                        <div className = {styles.checkedIcon}>
                        <Image src = '/img/checkmark.png' width = {20} height = {20} alt = ''/>
                        </div>
                    </div>
                    <div className = {statusClass(2)}>
                        <Image src = '/img/delivery.png' width = {30} height = {30} alt = ''/>
                        <span>Out for delivery</span>
                        <div className = {styles.checkedIcon}>
                        <Image src = '/img/checkmark.png' width = {20} height = {20} alt = ''/>
                        </div>
                    </div>
                    <div className = {statusClass(3)}>
                        <Image src = '/img/delivered.png' width = {30} height = {30} alt = ''/>
                        <span>Delivered</span>
                        <div className = {styles.checkedIcon}>
                        <Image src = '/img/checkmark.png' width = {20} height = {20} alt = ''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {styles.right}>
                <div className = {styles.wrapper}>
                    <h2 className = {styles.title}>CART TOTAL</h2>
                    <div className = {styles.totaltext}>
                        <b className = {styles.totalTextTitle}>Subtotal:</b>${order.total}
                    </div>
                    <div className = {styles.totaltext}>
                        <b className = {styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <div className = {styles.totaltext}>
                        <b className = {styles.totalTextTitle}>Total:</b>${order.total}
                    </div>
                    <button disabled className = {styles.button}>ORDER PLACED</button>
                </div>
            </div>
            </div>
       
    )
}
export const getServerSideProps = async ({ params }) =>{
    const res = await axios.get(`https://jb-restaurant-full-stack-restaurant.vercel.app/${params.id}`);
    return{
      props:{
        order: res.data,
      },
    };
};
export default Order;