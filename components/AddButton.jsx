import styles from '../src/styles/AddButton.module.css'
const AddButton = ({setClose}) =>{
    return(
        <div onClick = {()=>setClose(false)} className = {styles.mainAddButton}>Add New Burger</div>
    );
};
export default AddButton;