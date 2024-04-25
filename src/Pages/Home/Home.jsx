import Banner from "../Banner/Banner";
import DeliveryQtyChart from "../DeliveryQuantityChart/DeliveryQtyChart";
import Footer from "../Footer/Footer";
import Last7DaysProducts from "../Last7DaysProducts/Last7DaysProducts";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div className="bg-slate-950 text-slate-100">
            <Banner></Banner>
            <Products></Products>
            <Last7DaysProducts></Last7DaysProducts>
            <DeliveryQtyChart></DeliveryQtyChart>
            <Footer></Footer>
        </div>
    );
};

export default Home;