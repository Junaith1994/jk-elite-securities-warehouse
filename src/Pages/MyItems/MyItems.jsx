import axios from "axios";
import { useEffect, useState } from "react";
import useAuthState from "../../hooks/useFirebaseAuth/useAuthState";
import MyItem from "./MyItem/MyItem";

const MyItems = () => {
    // Firebase Auth state custom hook
    const [user] = useAuthState();
    const [myProducts, setMyProducts] = useState([]);
    // console.log(myProducts);

    // Sending request to the server to get the user added items
    useEffect(() => {
        user && axios.get(`http://localhost:5000/my-items/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setMyProducts(res.data);
            })
            .catch(error => console.log(error))
    }, [user?.email, user])


    return (
        <div className="container mx-auto bg-gray-950 text-slate-200">
            <h1 className="text-4xl text-center my-5 text-teal-400 font-bold">My Items</h1>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
                {
                    myProducts.map(product => <MyItem
                        key={product._id}
                        product={product}
                    ></MyItem>)
                }
            </div>
            {/* <div className="text-center my-5">
                <button onClick={() => navigate("/manage-products")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage Products</button>
            </div> */}
        </div>
    );
};

export default MyItems;