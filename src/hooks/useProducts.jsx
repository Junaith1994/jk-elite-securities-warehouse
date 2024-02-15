import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        axios.get('products.json')
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