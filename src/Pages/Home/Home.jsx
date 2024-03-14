import Banner from "../Banner/Banner";
import Last7DaysProducts from "../Last7DaysProducts/Last7DaysProducts";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Last7DaysProducts></Last7DaysProducts>
            {/* <div className=''>
                <svg className='bg-blue-800 text-center animate-ping h-10 w-10 mx-auto rounded-full' viewBox="0 0 24 24"></svg>
            </div> */}
        </div>
    );
};

export default Home;