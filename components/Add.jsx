import styles from '../src/styles/Add.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Add = ({setClose}) =>{
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [topping, setTopping] = useState(null);
    const [toppingOptions, setToppingOptions] = useState([]);

    const handleToppingInput = (e) => {
        setTopping({ ...topping, [e.target.name]: e.target.value });
      };
    const handleTopping = (e) =>{
        setToppingOptions((prev) => [...prev, topping]);
        console.log(toppingOptions);
    };
    const changePrice =(e,index)=>{
        const currPrices = prices;
        currPrices[index] = e.target.value;
        setPrices(currPrices);
    };

    const handleCreate = async () =>{
        const data = new FormData();
        data.append('file',file);
        data.append('upload_preset','uploads');
        try{
            const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/dzvuwrj9h/image/upload',
            data);
            const {url} = uploadRes.data;
            const newProduct = {
                title,desc,prices,toppingOptions,img:url,
            };
            await axios.post('http://localhost:3000/api/products/', newProduct);
            setClose(true);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className = {styles.container}>
            <div className = {styles.wrapper}>
                <span onClick = {()=>setClose(true)} className = {styles.close}>X</span>
                <h1>Add a New Burger</h1>
                <div className = {styles.item}>
                    <label className = {styles.label}>Choose An Image</label>
                    <input type = 'file' onChange = {(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className = {styles.item}>
                    <label className = {styles.label}>Title</label>
                    <input 
                    className = {styles.input}
                    type = 'text'
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className = {styles.item}>
                    <label className = {styles.label}>Description</label>
                    <textarea
                    rows = {4}
                    type = 'text'
                    onChange = {(e)=>setDesc(e.target.value)}
                    />
                </div>
                <div className = {styles.item}>
                    <label className = {styles.label}>Prices</label>
                    <div className = {styles.priceContainer}>
                    <input className = {`${styles.input} ${styles.inputSingle}`}
                    placeholder = 'JB single'
                    type = 'number'
                    onChange={(e)=>changePrice(e, 0)}
                    />
                    <input className = {`${styles.input} ${styles.inputCombo}`}
                    placeholder = 'JB Combo'
                    type = 'number'
                    onChange={(e)=>changePrice(e,1)}
                    />
                    </div>
                </div>
                <div className = {styles.item}>
                    <label className = {styles.label}>Topping</label>
                    <div className = {styles.topping}>
                    <input 
                    className = {`${styles.input} ${styles.inputSingle}`}
                    placeholder = 'Item'
                    type = 'text'
                    name = 'text'
                    onChange={handleToppingInput}
                    />
                    <input 
                    className = {`${styles.input} ${styles.inputCombo}`}
                    placeholder = 'Price'
                    type = 'number'
                    name = 'price'
                    onChange={handleToppingInput}
                    />
                    <button className = {styles.toppingButton} onClick = {handleTopping}>Add Topping</button>
                    </div>
                    <div className = {styles.toppingItems}>
                        {toppingOptions.map(choice=>(
                            <span key = {choice.text} className = {styles.toppingItem}>{choice.text}</span>
                        ))}
                    </div>
                </div>
                <button className = {styles.addButton} onClick = {handleCreate}>Add</button>
                </div>
                </div>
    );
};
export default Add;