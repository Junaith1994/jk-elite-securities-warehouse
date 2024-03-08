import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductData from "./ProductData/ProductData";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ManageProducts = () => {
    // Remaining products State after deletion
    const [remainingItems, setRemainingItems] = useState([]);
    // Getting All Prducts data using custom hook
    const [products] = useProducts();
    const navigate = useNavigate();
    useEffect(() => {
        setRemainingItems(products);
    }, [products])

    // Handle Delete Button 
    const handleDelete = (id, itemName) => {
        const deleteConfirmation = window.confirm(`Do you want to delete ${itemName} parmanently ?`);

        deleteConfirmation && axios.delete(`http://localhost:5000/product/delete/${id}`)
            .then(res => {
                console.log(res);
                let newProducts = [];
                if (res.data.deletedCount === 1) {
                    toast.success(`Successfully Deleted ${itemName}`)
                    const remainingProducts = products.filter(item => item._id !== id);
                    newProducts = [...remainingProducts];
                    setRemainingItems(newProducts);
                }
            })
            .then(error => { console.log(error); })
    }

    return (
        <div className="min-w-full bg-slate-950 text-slate-100">
            <h1 className="text-4xl font-semibold text-center mb-8">Manage All Security Products</h1>
            <table className="w-full border-collapse border border-slate-500">
                <thead className="row">
                    <tr className="">
                        <th className="border border-slate-600">Product Name</th>
                        <th className="border border-slate-600">Categories</th>
                        <th className="border border-slate-600">Quantity</th>
                        <th className="border border-slate-600">Price</th>
                        <th className="border border-slate-600">Supplier</th>
                        <th className="border border-slate-600">Delete</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        remainingItems.map(item => <ProductData
                            key={item._id}
                            productData={item}
                            handleDelete={handleDelete}
                        ></ProductData>)
                    }
                </tbody>
            </table>
            <div className="text-center my-5">
                <button onClick={() => navigate("/add-new-product")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Add New Product</button>
            </div>
            <div className="m-6">
                <h4 className="text-xl font-semibold text-yellow-400">Basic Instructions :</h4>
                <ul>
                    <li>Quantity Column data background color <span className="text-red-800 font-bold">Red</span> indicating low stock.</li>
                </ul>
            </div>
        </div >
    );
};

export default ManageProducts;