import styles from "../src/styles/BurgerList.module.css";
import BurgerCard from "../components/BurgerCard";
const BurgerList = ({burgerList}) =>{
    return (
        <div className = {styles.container}>
            <h1 className = {styles.title}>THE JUICIEST BURGERS YOU'VE EVER TASTED!</h1>
            <p className = {styles.desc}>
                Mouth watering tasty burgers made from fresh 100% Grade AAA Canadian Angus Beef and cage raised chickens fed without any added GMO.
            </p>
            <div className = {styles.wrapper}></div>
            {burgerList.map((burger) =>(
            <BurgerCard key = {burger._id} burger = {burger}/>
            ))}
            
        </div>
    );

};

export default BurgerList;