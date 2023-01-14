import { ITEMS } from "../Product";
import ProductList from "../components/ProductList";
import { Grid } from "@mui/material";


const Home=() => {
return(

    <div className="home">
        
        <div > <h1>Welcome to Pretty Stones -Jewellery shop</h1>
        </div>

        <div className="products">
    
        {  ITEMS.map((item) => (
           
         <ProductList 
        key={item.id}
         id={item.id}        
         itemName={item.itemName}
         price={item.price}
         itemImage={item.itemImage}
        /> ))}
        </div>
    
        
       
      
     
 </div>

    )

}

export default Home;