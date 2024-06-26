import { useNavigate } from 'react-router-dom';
import './ProductData.css'
import moment from 'moment';

const ProductData = ({ productData, handleDelete }) => {
    const { _id, itemName, categories, date, supplier, price, quantity } = productData;
    const navigate = useNavigate();

    // Converting date into user's local time zone
    const retrievedDateFromDB = moment(date);
    const localDateAndTime = retrievedDateFromDB.local().format('YYYY-MM-DD h:mm:ss a');
    
    return (
        <tr className="table-data-shad">
            <td onClick={() => navigate(`/product/${_id}`)} className="cursor-pointer border border-slate-700" title={`Click here to see the details of ${itemName}`}>{itemName}</td>
            <td className="border border-slate-700 shadow-md">{categories}</td>
            <td className={quantity < 100 ? 'bg-red-700 border border-slate-700' : 'border border-slate-700 shadow-md'}>{quantity}</td>
            <td className="border border-slate-700 shadow-md">{price}</td>
            <td className="border border-slate-700 shadow-md text-sm">{localDateAndTime}</td>
            <td className="border border-slate-700 shadow-md">{supplier}</td>
            <td className="border w-5 md:w-auto border-slate-700 shadow-md cursor-pointer">
                <svg onClick={() => handleDelete(_id, itemName)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-9 h-8 md:h-6">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                </svg>
            </td>
        </tr>
    );
};

export default ProductData;