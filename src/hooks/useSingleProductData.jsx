import axios from "axios";
import { useEffect, useState } from "react";

const useSingleProductData = (id) => {
    const [product, setProduct] = useState({});

    // Getting single product details by sending request to the server
    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(error => {
                console.log(error);
                // setError(error.message);
            })
    }, [id])

    return [product];
}

export default useSingleProductData;