import Cart from "./componant/Cart";
import Product from "./componant/Product";
import item from "./item.json";

function App() {
  return (
    // <>
    //   <div className="w-full flex items-center justify-evenly">
    //     <Cart />

    //     <div className="products">
    //       {item.map((products) => (
    //         <Product {...products} />
    //       ))}
    //     </div>
    //   </div>
    // </>
    <>
      <div className="w-full h-screen ">
        <Cart />
        <div className="flex flex-wrap justify-evenly bg-yellow-100  ">
          {item.map((pro) => (
            <Product {...pro} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
