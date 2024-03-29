import { useEffect, useState } from "react";
import axiosPrivate from "./useAxiosPrivate/useAxiosPrivate";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        axiosPrivate.get('https://jk-elite-securities-warehouse-server.vercel.app/products')
            .then(res => {
                // console.log(res);
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return [products];
};

export default useProducts;