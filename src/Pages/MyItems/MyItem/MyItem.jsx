import { useNavigate } from "react-router-dom";

const MyItem = ({ product, handleDelete }) => {
    const { _id, itemName, img, shortDescription, supplier, price, quantity } = product;
    const navigate = useNavigate();

    return (
        <div className="rounded-lg shadow-md shadow-cyan-300 bg-blend-multiply hover:shadow-2xl hover:-translate-y-3 duration-300">
            <div>
                <img className="object-fill h-48 w-full rounded-lg" src={img} alt={img} />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{itemName}</h2>
                <p className="font-semibold">{shortDescription}</p>
                <p><span className="font-bold">Supplier:</span> <span className="">{supplier}</span></p>
                <p className="font-bold">Price: {price}</p>
                <p className="font-bold">Quantity: {quantity}</p>
            </div>
            <div onClick={() => navigate(`/product/${_id}`)} className="px-0 py-0 md:px-2 md:py-2 text-slate-200 font-semibold btn-grad">
                <button className="px-4 py-4 rounded-lg w-100">Manage Product</button>
            </div>
            <div onClick={() => handleDelete(_id, itemName)} className="text-center text-slate-200 font-semibold hover:bg-red-600 bg-red-800 rounded-lg">
                <button className="w-full py-4">Delete Product</button>
            </div>
        </div>
    );
};

export default MyItem;