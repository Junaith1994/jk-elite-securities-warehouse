import Product from "../Product/Product";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const Products = () => {
    // Getting products data from custom hook
    const [products] = useProducts();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-5 text-fuchsia-950 font-bold">Items Inventory</h1>
            <div id="inventories" className="grid md:grid-cols-3 grid-cols-1 gap-3">
                {
                    products.slice(0,6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="text-center my-5">
                <button onClick={() => navigate("/manage-products")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage Products</button>
            </div>
        </div>
    );
};

export default Products;