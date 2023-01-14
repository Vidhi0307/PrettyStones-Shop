import { ITEMS } from "../Product";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="home">
      <div className="products">
        {ITEMS.map((item) => (
          <ProductList
            key={item.id}
            id={item.id}
            itemName={item.itemName}
            price={item.price}
            itemImage={item.itemImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
