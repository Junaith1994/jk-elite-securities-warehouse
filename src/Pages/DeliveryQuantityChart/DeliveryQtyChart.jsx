import Chart from 'react-google-charts';
import useProducts from '../../hooks/useProducts';
import { useEffect, useState } from 'react';

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
            newDates.push(product.date.split('T')[0]);
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
        title: "Stocked Quantity and Delivery Chart",
        vAxis: { title: "Stocked Qty" },
        hAxis: { title: "Delevered Qty" },
        seriesType: "bars",
        series: { 5: { type: "line" } },
    };

    return (
        <div>
            <h1>Products Delevery & Quantity Chart</h1>
            <Chart chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
                options={options}></Chart>
        </div>
    );
};

export default DeliveryQtyChart;