import axios from "axios";
import { useEffect, useState } from "react";
import useAuthState from "../../hooks/useFirebaseAuth/useAuthState";
import MyItem from "./MyItem/MyItem";
import { toast } from "react-toastify";
import axiosPrivate from "../../hooks/useAxiosPrivate/useAxiosPrivate";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
// import useDeleteProduct from "../../hooks/useDeleteProduct";

const MyItems = () => {
    // Firebase Auth state custom hook
    const [user] = useAuthState();
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate();

    // Sending request to the server to get the user added items
    useEffect(() => {
        user && axiosPrivate.get(`https://jk-elite-securities-warehouse-server.vercel.app/my-items/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setMyProducts(res.data.reverse());
            })
            .catch(error => {
                console.log(error)
                // Showing error meassage to user and navigating to sign-in page
                error?.response?.status === 401 || 403
                    &&
                    toast.error(`${error?.response?.statusText} Access !! Please Sign-in again.` || "Please Sign-in again.")
                signOut(auth);
                navigate('/login');
                localStorage.removeItem('accessToken');
            })
    }, [user?.email, user])

    // Handle Delete Product
    const handleDelete = (id, itemName) => {
        const deleteConfirmation = window.confirm(`Do you want to delete ${itemName} parmanently ?`);

        deleteConfirmation && axios.delete(`https://jk-elite-securities-warehouse-server.vercel.app/product/delete/${id}`)
            .then(res => {
                console.log(res);
                let newProducts = [];
                if (res.data.deletedCount === 1) {
                    toast.success(`Successfully Deleted ${itemName}`)
                    const remainingProducts = myProducts.filter(item => item._id !== id);
                    newProducts = [...remainingProducts];
                    setMyProducts(newProducts);
                }
            })
            .then(error => { console.log(error); })
    }

    return (
        <div className="container mx-auto bg-gray-950 text-slate-200">
            <h1 className="text-4xl text-center my-5 text-teal-400 font-bold">My Items</h1>
            {
                myProducts.length !== 0
                ?
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    {
                        myProducts.map(product => <MyItem
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        ></MyItem>)
                    }
                </div>
                :
                <h3 className="text-4xl text-center text-red-800 font-bold">No Items Added Yet!</h3>
            }
            {/* <div className="text-center my-5">
                <button onClick={() => navigate("/manage-products")} className="bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage Products</button>
            </div> */}
        </div>
    );
};

export default MyItems;