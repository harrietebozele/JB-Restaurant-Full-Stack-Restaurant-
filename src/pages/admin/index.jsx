import styles from '../../styles/Admin.module.css'
import Image from 'next/legacy/image';
import axios from 'axios';
import { useState } from 'react';
const Admin = ({ orders, products }) =>{
    const [burgerList, setBurgerList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ['Preparing', 'Out for delivery', 'Delivered']

    const handleDelete = async (id) =>{
        try{
            const res = await axios.delete('https://jb-restaurant-full-stack-restaurant.vercel.app/api/products/' + id);
            setBurgerList(burgerList.filter((burger)=>burger._id !== id))
        } catch (err){
            console.log(err);
        }
    };

    const handleStatus = async (id) =>{
        const item = orderList.filter(order=>order._id===id)[0];
        const currStatus = item.status;
        try{
           const res = await axios.put('https://jb-restaurant-full-stack-restaurant.vercel.app/api/orders/' + id,{status:currStatus+1});
           setOrderList([
            res.data,
            ...orderList.filter((order)=>order._id!==id),
           ]);

        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
            <h1 className = {styles.title}>Products</h1>
            <table className = {styles.table}>
                <tbody>
                    <tr className = {styles.trTitle}>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {burgerList.map((product) =>(
                <tbody key = {product._id}>
                    <tr className = {styles.trTitle}>
                        <td><Image
                        src = {product.img}
                        width = {50}
                        height = {50}
                        objectFit = 'cover'
                        alt = ''
                        /></td>
                        <td>{product._id.slice(0,5)}...</td>
                        <td>{product.title}</td>
                        <td>${product.prices[0]}</td>
                        <td>
                            <button className = {styles.button}>Edit</button>
                            <button className = {styles.button} onClick = {()=>handleDelete(product._id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
            </div>
            <div className = {styles.item}>
            <h1 className = {styles.title}>Orders</h1>
            <table className = {styles.table}>
                <tbody>
                    <tr className = {styles.trTitle}>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orderList.map((order)=>(
                <tbody key = {order._id}>
                    <tr className = {styles.trTitle}>
                        <td>{order._id.slice(0,5)}...</td>
                        <td>{order.customer}</td>
                        <td>${order.total}</td>
                        <td>{order.method === 0 ? <span>Cash</span> : <span>Paypal</span>}</td>
                        <td>{status[order.status]}</td>
                        <td>
                            <button onClick = {()=>handleStatus(order._id)}>Next Stage</button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
            </div>
        </div>
    )
}
export const getServerSideProps = async (ctx) =>{
    const myCookie = ctx.req?.cookies || '';
    if(myCookie.token!==process.env.TOKEN){
        return{
            redirect:{
                destination:'/admin/login',
                permanent:false,
            },
        };
    }
    const productRes = await axios.get(`https://jb-restaurant-full-stack-restaurant.vercel.app/api/products/`);
    const orderRes = await axios.get("https://jb-restaurant-full-stack-restaurant.vercel.app/api/orders/");
    return{
      props:{
        products: productRes.data,
        orders: orderRes.data,
      },
    };
};
export default Admin;