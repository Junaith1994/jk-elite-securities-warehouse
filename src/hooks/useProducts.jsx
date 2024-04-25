import { useEffect, useState } from "react";
import axiosPrivate from "./useAxiosPrivate/useAxiosPrivate";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axiosPrivate.get('https://jk-elite-securities-warehouse-server.vercel.app/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return [products];
};

export default useProducts;