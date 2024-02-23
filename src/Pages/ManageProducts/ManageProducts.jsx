import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductData from "./ProductData/ProductData";

const ManageProducts = () => {
    // Getting All Prducts data using custom hook
    const [products] = useProducts();
    const navigate = useNavigate();

    return (
        <div className="min-w-full bg-slate-950 text-slate-100">
            <h1 className="text-4xl font-semibold text-center mb-8">All Security Products Summary</h1>
            <table className="w-full border-collapse border border-slate-500">
                <thead className="row">
                    <tr className="">
                        <th className="border border-slate-600">Product Name</th>
                        <th className="border border-slate-600">Categories</th>
                        <th className="border border-slate-600">Quantity</th>
                        <th className="border border-slate-600">Price</th>
                        <th className="border border-slate-600">Supplier</th>
                        <th className="border border-slate-600">Delete Product</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        products.map(item => <ProductData
                            key={item._id}
                            productData={item}
                        ></ProductData>)
                    }
                </tbody>
            </table>
            <div onClick={() => navigate("/add-new-product")} className="text-center my-5">
                <button className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Add New Product</button>
            </div>
        </div >
    );
};

export default ManageProducts;