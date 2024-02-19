const ProductData = ({ productData }) => {
    const {itemName, categories, supplier, price, quantity} = productData;
    return (
        <tr>
            <td className="border border-slate-700">{itemName}</td>
            <td className="border border-slate-700">{categories}</td>
            <td className="border border-slate-700">{quantity}</td>
            <td className="border border-slate-700">{price}</td>
            <td className="border border-slate-700">{supplier}</td>
        </tr>
    );
};

export default ProductData;