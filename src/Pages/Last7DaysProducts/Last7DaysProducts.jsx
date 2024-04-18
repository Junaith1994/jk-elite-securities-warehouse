import axios from "axios";
import { useEffect, useState } from "react";
import AddedItem from "./AddedItem";

const Last7DaysProducts = () => {
    const [addedProducts, setAddedProducts] = useState([]);
    console.log('AddedProducts:', addedProducts);

    useEffect(() => {
        axios.get('https://jk-elite-securities-warehouse-server.vercel.app/recently-added')
            .then(res => {
                setAddedProducts(res.data.reverse());
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-5 text-teal-500 font-bold">Added Products In Last 7 Days</h1>
            {
                addedProducts.length !== 0 ? <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    {
                        addedProducts.map(item => <AddedItem
                            key={item._id}
                            item={item}
                        ></AddedItem>)
                    }
                </div>
                    :
                    <div>
                        <h2 className="text-3xl text-center text-red-600 font-semibold">No products added in last 7 days</h2>
                    </div>
            }
            {/* <div className="text-center my-5">
                <button onClick={() => navigate("/manage-products")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage Products</button>
            </div> */}
        </div>
    );
};

export default Last7DaysProducts;