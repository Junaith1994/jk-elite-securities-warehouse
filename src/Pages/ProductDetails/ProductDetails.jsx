// import { useContext } from "react";
// import { ProductDetailsContext } from "../Product/Product";

// import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const ProductDetails = () => {
    // const product = useContext(ProductDetailsContext);
    // console.log(product);
    const [products] = useProducts();
    // const { id } = useParams();
    console.log(products);
    // const productDetails = products.find(pd => pd._id === id);
    // console.log(productDetails);
    return (
        <div>
            <h1 className="text-4xl text-slate-950">Product Details</h1>
        </div>
    );
};

export default ProductDetails;