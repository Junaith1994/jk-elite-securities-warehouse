import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSingleProductData from "../../hooks/useSingleProductData";
import axios from "axios";
import moment from "moment";

const ProductDetails = () => {
    const { id } = useParams();
    const restockInputRef = useRef(0);
    const [latestQtyValue, setLatestQtyValue] = useState(undefined);
    const [delivered, setDelivered] = useState(0);
    const navigate = useNavigate();

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
        date,
        delivered: storedDeliveredQty
    } = product;

    // Converting date into user's local time zone
    const retrievedDateFromDB = moment(date);
    const localDateAndTime = retrievedDateFromDB.local().format('YYYY-MM-DD HH:mm:ss');

    // Setting immutable quantity value as mutable for mutation (Because 'quantity' value can't be mutable directly. That's why copying the quantity value for mutation which will be updated later in the database as actual value ans also update in UI)
    useEffect(() => {
        setLatestQtyValue(quantity);
        setDelivered(storedDeliveredQty);
    }, [quantity, storedDeliveredQty])

    // Handle delivered button
    const handleDelivered = () => {
        if (latestQtyValue > 0) {
            const updatedValue = latestQtyValue - 1;
            setLatestQtyValue(updatedValue);
            const newDeliveredValue = delivered + 1;
            latestQtyValue !== 0 && setDelivered(newDeliveredValue);
            // console.log('Delivered:', delivered);
            // console.log('UpdatedQty:', updatedValue);
            axios.post('https://jk-elite-securities-warehouse-server.vercel.app/product/update-qty', {
                productId: id,
                updatedValue: updatedValue,
                deliveredValue: newDeliveredValue
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    // Handle Clear Delivered Qty
    const clearDeliveredQty = () => {
        const clearConfirmation = window.prompt("Do you want to clear the delivered records?  If Yes Please Enter Password, Or See the Basic Instructions at the bottom of this page?")
        console.log(clearConfirmation);

        clearConfirmation == 12345 && axios.post('https://jk-elite-securities-warehouse-server.vercel.app/product/clear-delivered', {
            productId: id
        })
            .then(res => {
                console.log(res.data);
                location.reload();
            })
            .catch(error => {
                console.log(error);
                toast.error("Something Went Wrong ! Clearing failed !!");
            })

    }

    // Handle Restock button 
    const handleRestock = event => {
        event.preventDefault();
        if (restockInputRef.current.value < 1) {
            return toast.error("Restock value less than 1 is invalid. Enter between 1 - 3000 value.");
        }
        const restockValue = parseInt(restockInputRef.current.value) + parseInt(latestQtyValue);
        const confirmation = restockValue > 1000 && window.confirm(`Are you sure you want to stock ${restockValue} products?`);
        
            restockValue > 3000 ? toast.error("Total Restock value more than 3000 is not allowed")
                :
                confirmation ? axios.post('https://jk-elite-securities-warehouse-server.vercel.app/product/update-qty', {
                    productId: id,
                    updatedValue: restockValue
                })
                    .then(res => { console.log(res); location.reload(); })
                    .then(error => console.log(error))
                    :
                    restockValue <= 1000 && axios.post('https://jk-elite-securities-warehouse-server.vercel.app/product/update-qty', {
                        productId: id,
                        updatedValue: restockValue
                    })
                        .then(res => { console.log(res); location.reload(); })
                        .then(error => console.log(error))

    }

    return (
        <div className="bg-gray-950 text-gray-200">
            <h1 className="text-4xl text-center text-gray-200">Manage Product</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="w-full md:w-3/4 shadow-xl shadow-cyan-400">
                    <img className="w-full" src={img} alt={itemName} />
                </div>
                <div className="my-7 md:my-0 text-center md:text-left">
                    <h2 className="mb-3 text-3xl font-semibold indent-1">{itemName}</h2>
                    <p className="mb-3"><span className="font-bold">Product Id:</span> {_id}</p>
                    <p className="mb-3"><span className="font-bold">Categories:</span> {categories}</p>
                    <p className="mb-3 px-5 md:px-0"><span className="font-bold">Description:</span> {description}</p>
                    <p className="mb-3"><span className="font-bold">Supplier:</span> {supplier}</p>
                    <p className="mb-3 font-bold">Price: {price}</p>
                    <p className={quantity < 100 ? 'mb-3 bg-red-700' : 'mb-3'}><span className="font-bold">Quantity:</span> {quantity <= latestQtyValue ? quantity : latestQtyValue}</p>
                    <p className='mb-3'><span className="font-bold">Delivered:</span> {delivered >= storedDeliveredQty ? delivered : storedDeliveredQty}</p>
                    <p className="mb-3"><span className="font-bold">Added By:</span> {createdBy}</p>
                    <p className="mb-3"><span className="font-bold">Added on:</span> {localDateAndTime}</p>
                    <button onClick={() => handleDelivered()} className="my-5 bg-cyan-700 hover:bg-cyan-900 px-5 py-2 rounded-md text-slate-50 font-semibold">Delivered</button>
                    <button onClick={() => clearDeliveredQty()} className="my-5 ms-10 bg-cyan-700 hover:bg-cyan-900 px-5 py-2 rounded-md text-slate-50 font-semibold">Clear Delivered Qty</button>
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
                        <li>You must provide the password to Clear the delivered quantity. Password is: 12345 (Temporary)</li>
                        <li>Restock input value must be a positive value.</li>
                        <li>You cannot re-stock more than 3000 items in total(existing qty + new qty) at a time.</li>
                        <li>To re-stock more than 1000 items in total(existing qty + new qty) at a time, you will be asked for confirmation.</li>
                    </ul>
                </div>
                    :
                    <div className="m-6">
                        <h4 className="text-xl font-semibold text-yellow-400">Basic Instructions :</h4>
                        <ul>
                            <li>You must provide the password to Clear the delivered quantity. Password is: 12345 (Temporary)</li>
                            <li>Restock input value must be a positive value.</li>
                            <li>You cannot restock more than 3000 item at a time.</li>
                            <li>To add more than 1000 item at a time you will be asked for confirmation.</li>
                        </ul>
                    </div>
            }
            <div className="text-center my-6">
                <button onClick={() => navigate("/manage-products")} className="mb-5 bg-cyan-800 font-semibold text-slate-50 hover:bg-cyan-950 px-6 py-3 rounded-md">Manage All Inventories</button>
            </div>
        </div>
    );
};

export default ProductDetails;