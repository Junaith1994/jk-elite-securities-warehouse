import Product from "../Product/Product";
import useProducts from "../../hooks/useProducts";

const Products = () => {
    // Getting products data from custom hook
    const [products] = useProducts();

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-5 text-fuchsia-950 font-bold">Items Inventory</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                {
                    products.slice(0,6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;