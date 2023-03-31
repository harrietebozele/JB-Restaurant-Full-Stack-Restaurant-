import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '@/styles/Home.module.css'
import Featured from '../../components/Featured'
import BurgerList from '../../components/BurgerList'
import axios from 'axios'
import { useState } from 'react'
import AddButton from '../../components/AddButton'
import Add from '../../components/Add'




export default function Home({burgerList, admin}) {
  const [close,setClose] = useState(true);

  return (
    <div className = {styles.container}>
      <Head>
        <title>JB Burgers n Fries</title>
        <meta name="description" content="Best Burger Shop in Town" />
        <link rel="icon" href="/img/pngburger.png" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose = {setClose}/>}
      <BurgerList burgerList = {burgerList}/>
      {!close && <Add setClose = {setClose}/>}
      
    </div>
  )
};
export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies||'';
  let admin = false;
  if(myCookie.token === process.env.TOKEN){
    admin = true;
  }
  const res = await axios.get("https://jb-restaurant-full-stack-restaurant.vercel.app/api/products");
  return {
    props: {
      burgerList: res.data,
      admin
    },
  };
}