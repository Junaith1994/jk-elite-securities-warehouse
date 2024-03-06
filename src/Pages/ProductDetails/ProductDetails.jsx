import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSingleProductData from "../../hooks/useSingleProductData";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const restockInputRef = useRef(0);
    const [latestQtyValue, setLatestQtyValue] = useState(undefined);

    // Getting single product data from the server by sending specific product 'id' as parameter using custom hook 
    const [product] = useSingleProductData(id);
    // const [error, setError] = useState('');

    // Destructured info of the single product
    const {
        _id,
        itemName,
        img,
        categories,
        description,
        supplier,
        price,
        quantity,
        createdBy,
        date
    } = product;

    // Setting immutable quantity value as mutable for mutation 
    useEffect(() => {
        setLatestQtyValue(quantity);
    }, [quantity])

    // Handle delivered button
    const handleDelivered = () => {
        if (latestQtyValue > 0) {
            const updatedValue = latestQtyValue - 1;
            setLatestQtyValue(updatedValue);
            // console.log(latestQtyValue);
            axios.post('http://localhost:5000/product/update-qty', {
                updatedValue: updatedValue,
                productId: id
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    // Handle Restock button 
    const handleRestock = event => {
        event.preventDefault();
        const restockValue = restockInputRef.current.value;
        const confirmation = restockValue > 1000 && window.confirm(`Are you sure to add ${restockValue} products to the stock?`);
        // console.log(restockValue);
        if (restockValue && restockValue > 0) {
            restockValue > 3000 ? toast.error("Restock value more than 3000 is not allowed")
                :
                confirmation ? axios.post('http://localhost:5000/product/update-qty', {
                    productId: id,
                    updatedValue: restockValue
                })
                    .then(res => { console.log(res); })
                    .then(error => console.log(error)) :
                    restockValue <= 1000 && axios.post('http://localhost:5000/product/update-qty', {
                        productId: id,
                        updatedValue: restockValue
                    })
                        .then(res => { console.log(res); })
                        .then(error => console.log(error))
        }
        else {
            toast.error("Restock Value less than 1 is invalid. Enter between 1 - 3000 value.");
        }
        location.reload();
    }

    return (
        <div className="bg-gray-950 text-gray-200">
            <h1 className="text-4xl text-center text-gray-200">Manage Product</h1>
            <div className="grid grid-cols-2 my-10">
                <div className="w-3/4 shadow-lg shadow-slate-500">
                    <img className="w-full" src={img} alt={itemName} />
                </div>
                <div className="">
                    <h2 className="mb-3 text-3xl font-semibold">{itemName}</h2>
                    <p className="mb-3"><span className="font-bold">Product Id:</span> {_id}</p>
                    <p className="mb-3"><span className="font-bold">Categories:</span> {categories}</p>
                    <p className="mb-3"><span className="font-bold">Description:</span> {description}</p>
                    <p className="mb-3"><span className="font-bold">Supplier:</span> {supplier}</p>
                    <p className="mb-3 font-bold">Price: {price}</p>
                    <p className={quantity < 100 ? 'mb-3 bg-red-700' : 'mb-3'}><span className="font-bold">Quantity:</span> {quantity <= latestQtyValue ? quantity : latestQtyValue}</p>
                    <p className="mb-3"><span className="font-bold">Added By:</span> {createdBy}</p>
                    <p className="mb-3"><span className="font-bold">Added on:</span> {date}</p>
                    <button onClick={() => handleDelivered()} className="my-5 bg-cyan-700 hover:bg-cyan-900 px-5 py-2 rounded-md text-slate-50 font-semibold">Delivered</button>
                    <div className="text-center">
                        <h2 className="font-bold text-2xl mb-3">Restock the Product</h2>
                        <form onSubmit={handleRestock}>
                            <input ref={restockInputRef} className="font-semibold py-2 px-1 me-3 text-gray-950 rounded-md" placeholder="Please Enter Valid Value" type="number" required />
                            <input className="my-5 bg-cyan-700 hover:bg-cyan-900 px-5 py-2 rounded-md text-slate-50 font-semibold" type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
            {
                quantity < 100 ? <div className="m-6">
                    <h4 className="text-xl font-semibold text-yellow-400">Basic Instructions :</h4>
                    <ul>
                        <li>Quantity data background color in <span className="text-red-800 font-bold">Red</span> indicating low stock.</li>
                        <li>Restock input value must be a positive value.</li>
                        <li>You cannot restock more than 3000 item at a time.</li>
                        <li>To add more than 1000 item at a time you will be asked for confirmation.</li>
                    </ul>
                </div>
                    :
                    <div className="m-6">
                        <h4 className="text-xl font-semibold text-yellow-400">Basic Instructions :</h4>
                        <ul>
                            <li>Restock input value must be a positive value.</li>
                            <li>You cannot restock more than 3000 item at a time.</li>
                            <li>To add more than 1000 item at a time you will be asked for confirmation.</li>
                        </ul>
                    </div>
            }
        </div>
    );
};

export default ProductDetails;