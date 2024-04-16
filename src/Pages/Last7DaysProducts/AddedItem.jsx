import moment from "moment";
import './AddedItem.css';

const AddedItem = ({ item }) => {
    const { itemName, img, shortDescription, supplier, price, quantity, date } = item;
    
    // Converting date into user's local time zone
    const retrievedDateFromDB = moment(date);
    const localDateAndTime = retrievedDateFromDB.local().format('YYYY-MM-DD HH:mm:ss');

    return (
        <div className="rounded-lg shadow-lg shadow-slate-300 bg-blend-multiply hover:shadow-2xl hover:-translate-y-3 duration-300 outline outline-2 outline-gray-400 added-item">
            <div>
                <img className="object-fill h-48 w-full rounded-lg" src={img} alt={img} />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">{itemName}</h2>
                <h2 className="text-2xl font-bold">Added On : {localDateAndTime}</h2>
                <p className="font-semibold">{shortDescription}</p>
                <p><span className="font-bold">Supplier:</span> <span className="">{supplier}</span></p>
                <p className="font-bold">Price: {price}</p>
                <p className={quantity < 100 ? "bg-red-700 text-slate-100 font-bold" : "font-bold"}>In-Stock: {quantity} Qty</p>
            </div>
        </div>
    );
};

export default AddedItem;