import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                console.log(res);
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return [products];
};

export default useProducts;