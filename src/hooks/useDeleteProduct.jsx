import { useEffect, useState } from "react";
import useProducts from "./useProducts";
import { toast } from "react-toastify";
import axios from "axios";

const useDeleteProduct = () => {
    // Remaining products State after deletion
    const [remainingItems, setRemainingItems] = useState([]);
    // Getting All Prducts data using custom hook
    const [products] = useProducts();
    
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

    return [handleDelete, remainingItems]
}

export default useDeleteProduct;