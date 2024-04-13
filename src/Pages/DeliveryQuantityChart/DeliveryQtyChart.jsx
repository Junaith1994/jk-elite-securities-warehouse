import Chart from 'react-google-charts';
import useProducts from '../../hooks/useProducts';
import { useEffect, useState } from 'react';
import moment from 'moment';

const DeliveryQtyChart = () => {
    const [products] = useProducts();
    const [productNames, setProductNames] = useState([]);
    const [deliveredQty, setDeleveredQty] = useState([]);
    const [date, setDate] = useState([]);
    const [stockQty, setStockQty] = useState([]);

    useEffect(() => {
        const newNames = [];
        const newStockQty = [];
        const newDeliveryQty = [];
        const newDates = [];

        // Extracting product names, stockedQty, deliveredQty and dates and pushing these into new array 
        products.map(product => {
            newNames.push(product.itemName);
            newStockQty.push(parseInt(product.quantity));
            newDeliveryQty.push(product.delivered);
            // // Converting date into user's local time zone
            newDates.push(moment(product.date).local().format('YYYY-MM-DD HH:mm:ss').split(' ')[0]);
            setProductNames(newNames);
            setStockQty(newStockQty);
            setDeleveredQty(newDeliveryQty);
            setDate(newDates);
        })

    }, [products])

    // console.log('Product Name:', productNames.length, 'Stock-Qty:', stockQty.length, 'Date:', date.length);
    // console.log('Product Name:', productNames, 'Stock-Qty:', stockQty, 'Date:', date);
    // console.log(date);

    const data = [
        ['Date', 'StockedQty', 'DeleveredQty'],
        ...productNames.map((productName, index) => [
            date[index],
            stockQty[index],
            deliveredQty[index],
        ])
    ];
    const options = {
        title: "Stocked And Delivered Quantity Chart",
        vAxis: { title: "Quantity Value" },
        hAxis: { title: "Date" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
    };

    return (
        <div className='mb-10'>
            <h1 className='text-center text-fuchsia-950 font-bold my-10 text-4xl'>Stocked Products Quantity Vs Delevered Products Quantity</h1>
            <Chart chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
                options={options}></Chart>
        </div>
    );
};

export default DeliveryQtyChart;