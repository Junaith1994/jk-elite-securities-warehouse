import axios from "axios";
import { useEffect, useState } from "react";

const useSingleProductData = (id) => {
    const [product, setProduct] = useState({});

    // Getting single product details by sending request to the server
    useEffect(() => {
        axios.get(`https://jk-elite-securities-warehouse-server.vercel.app/product/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])

    return [product];
}

export default useSingleProductData;