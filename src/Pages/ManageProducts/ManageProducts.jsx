import useProducts from "../../hooks/useProducts";
import ProductData from "./ProductData/ProductData";

const ManageProducts = () => {
    // Getting All Prducts data using custom hook
    const [products] = useProducts();

    return (
        <div className="w-full bg-slate-950 text-slate-100">
            <h1 className="text-4xl font-semibold text-center mb-8">All Security Products Summary</h1>
            <table className="table-auto w-full border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600 ">Product Name</th>
                        <th className="border border-slate-600 ">Categories</th>
                        <th className="border border-slate-600 ">Quantity</th>
                        <th className="border border-slate-600 ">Price</th>
                        <th className="border border-slate-600 ">Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => <ProductData
                            key={item._id}
                            productData={item}
                        ></ProductData>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;