import { ITEMS } from "../Product";
import ProductItem from "./ProductItem";

const Home = () => {
  return (
    
      <div className="products">
        {ITEMS.map((item) => (
          <ProductItem
            key={item._id}
            _id={item._id}
            itemDesc={item.itemName}
            price={item.price}
            itemImage={item.itemImage}
          />
        ))}
      </div>
   
  );
};

export default Home;
