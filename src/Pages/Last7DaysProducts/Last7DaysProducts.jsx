import axios from "axios";
import { useEffect, useState } from "react";
import AddedItem from "./AddedItem";

const Last7DaysProducts = () => {
    const [addedProducts, setAddedProducts] = useState([]);

    useEffect(() => {
        axios.get('https://jk-elite-securities-warehouse-server.vercel.app/recently-added')
            .then(res => {
                setAddedProducts(res.data.reverse());
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-5 text-fuchsia-950 font-bold">Added Products In Last 7 Days</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                {
                    addedProducts.map(item => <AddedItem
                        key={item._id}
                        item={item}
                    ></AddedItem>)
                }
            </div>
            {/* <div className="text-center my-5">
                <button onClick={() => navigate("/manage-products")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage Products</button>
            </div> */}
        </div>
    );
};

export default Last7DaysProducts;