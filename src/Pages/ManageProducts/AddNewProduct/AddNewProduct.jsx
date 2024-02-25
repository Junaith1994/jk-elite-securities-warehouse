import { useRef } from "react";
import { NavLink } from "react-router-dom";

const AddNewProduct = () => {
    // Input Field Value
    const productNameRef = useRef('');
    const imgLinkRef = useRef('');
    const categoriesRef = useRef('');
    const shortDescriptionRef = useRef('');
    const descriptionRef = useRef('');
    const supplierRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const createdByRef = useRef('');
    const dateRef = useRef('');
    // .current.value;
    const handleFormSubmit = event => {
        // Preventing Default Submit
        event.preventDefault();
        const productName = productNameRef.current.value;
        const imgLink = imgLinkRef.current.value;
        const categories = categoriesRef.current.value;
        const shortDescription = shortDescriptionRef.current.value;
        const description = descriptionRef.current.value;
        const supplier = supplierRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const createdBy = createdByRef.current.value;
        const date = new Date() || dateRef.current.value; 
        console.log({
            "productName": productName,
            "imgLink": imgLink,
            "categories": categories,
            "shortDescription": shortDescription,
            "description": description,
            "supplier": supplier,
            "price": price,
            "quantity": quantity,
            "createdBy": createdBy,
            "date": date,
        });
        // event.target.reset();
    }

    return (
        <div className="bg-gray-950 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-full"
                    src="https://i.ibb.co/8NsDBpr/logo-no-background.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100">
                    Add New Product Information
                </h2>
            </div>

            <div className="shadow-2xl backdrop-blur-xl rounded-md bg-slate-950 shadow-cyan-500 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleFormSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Product Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="productName"
                                name="productName"
                                ref={productNameRef}
                                type="text"
                                autoComplete="productName"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Image Link
                        </label>
                        <div className="mt-2">
                            <input
                                id="imgLink"
                                name="img-Link"
                                ref={imgLinkRef}
                                type="text"
                                autoComplete="img-Link"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Categories
                        </label>
                        <div className="mt-2">
                            <input
                                id="categories"
                                name="categories"
                                ref={categoriesRef}
                                type="text"
                                autoComplete="categories"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Short Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="short-description"
                                name="shortDescription"
                                ref={shortDescriptionRef}
                                type="text"
                                autoComplete="shortDescription"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                ref={descriptionRef}
                                type="text"
                                autoComplete="description"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Supplier
                        </label>
                        <div className="mt-2">
                            <input
                                id="supplier"
                                name="supplier"
                                ref={supplierRef}
                                type="text"
                                autoComplete="supplier"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                id="price"
                                name="price"
                                ref={priceRef}
                                type="text"
                                autoComplete="price"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Quantity
                        </label>
                        <div className="mt-2">
                            <input
                                id="quantity"
                                name="quantity"
                                ref={quantityRef}
                                type="text"
                                autoComplete="quantity"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Created By
                        </label>
                        <div className="mt-2">
                            <input
                                id="createdBy"
                                name="createdBy"
                                ref={createdByRef}
                                type="email"
                                autoComplete="createdBy"
                                placeholder="Your Email"
                                required
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-100">
                            Date
                        </label>
                        <div className="mt-2">
                            <input
                                id="date"
                                name="date"
                                ref={dateRef}
                                type="date"
                                autoComplete="date"
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm lg:text-xl sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className='login-btn rounded-md'>
                        <button
                            type="submit"
                            className="w-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    <NavLink to="/manage-products" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        See All Products
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default AddNewProduct;