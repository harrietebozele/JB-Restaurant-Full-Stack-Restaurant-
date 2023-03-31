import styles from '../../../src/styles/Product.module.css';
import Image from "next/legacy/image";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../redux/cartSlice';

const Product = ({ burger }) =>{

    const [options, setOptions] = useState(0);
    const [price, setPrice] = useState(burger.prices[0]);
    const [toppings, setToppings] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    

    const changePrice = (number) =>{
        setPrice( Math.round((price + number)*10)/10);
    }

    const handleSize = (sizeIndex) =>{
        const difference = burger.prices[sizeIndex] - burger.prices[options];
        setOptions(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (e,choice) =>{
        const checked = e.target.checked;
        if(checked){
            changePrice(choice.price);
            setToppings(prev=>[...prev,choice]);
        } else{
            changePrice(-choice.price);
            setToppings(toppings.filter((toppings)=>toppings._id!==choice._id));
        }
    };

    const handleClick = () =>{
        dispatch(addProduct({...burger, toppings, price, quantity}));
    }


 
    return (<div className = {styles.container}>
           <div className = {styles.left}>
           <div className = {styles.imgContainer}>
            <Image src = {burger.img} objectFit = 'contain' layout = 'fill' alt = ''/>
           </div>
            </div> 
           <div className = {styles.right}>
            <h1 className = {styles.title}>{burger.title}</h1>
            <span className = {styles.price}>${price}</span>
            <p className = {styles.desc}>{burger.desc}</p>
            <h3 className = {styles.choose}>Choose your option</h3>
            <div className = {styles.options}>
            <div className = {styles.option} onClick = {()=>handleSize(0)}>
                <Image src = '/img/burgcombo.png' layout = 'fill' alt = ''/>
                <span className = {styles.number}>JB single</span>
            </div>
            <div className = {styles.option} onClick = {()=>handleSize(1)}>
            <Image src = '/img/burgstandalone.png' layout = 'fill' alt = ''/>
            <span className = {styles.number}>JB Combo</span>
            </div>
            </div>
            <h3 className = {styles.choose}>Add extra toppings</h3>
            <div className = {styles.ingredients}>
                {burger.toppingOptions.map(choice=>(
                         <div className = {styles.choice} key = {choice._id}>
                         <input 
                         type = 'checkbox' 
                         id = {choice.text}
                         name = {choice.text}
                         className = {styles.checkbox}
                         onChange = {(e)=>handleChange(e,choice)} />
                         <label htmlFor = 'bacon'>{choice.text}</label>
                     </div>
                ))}
           
    
                
            </div>
            <div className = {styles.add}>
                <input onChange = {(e)=>setQuantity(e.target.value)}type = 'number' defaultValue={1} className = {styles.quantity} />
                <button className = {styles.button} onClick = {handleClick}>Add To Cart</button>
            </div>

            </div> 
        </div>
    );
};

export const getServerSideProps = async ({ params }) =>{
    const res = await axios.get(`https://jb-restaurant-full-stack-restaurant.vercel.app/api/products/${params.id}`);
    return{
      props:{
        burger: res.data,
      },
    };
};



export default Product;

