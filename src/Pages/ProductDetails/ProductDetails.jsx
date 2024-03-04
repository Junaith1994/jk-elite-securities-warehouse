import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    // const [error, setError] = useState('');

    // Destructured info of the single product
    const {
        _id,
        itemName,
        img,
        categories,
        shortDescription,
        description,
        supplier,
        price,
        quantity,
        createdBy,
        date
    } = product;

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

    return (
        <div>
            <h1 className="text-4xl text-center text-black">Product Details</h1>
        </div>
    );
};

export default ProductDetails;