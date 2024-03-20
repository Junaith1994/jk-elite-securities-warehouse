import Chart from 'react-google-charts';
import useProducts from '../../hooks/useProducts';
import { useEffect, useState } from 'react';

const DeliveryQtyChart = () => {
    const [products] = useProducts();
    const [productNames, setProductNames] = useState([]);
    const [deliveredQty, setDeleveredQty] = useState([]);
    const [date, setDate] = useState([]);
    const [stockQty, setStockQty] = useState(0);


    useEffect(() => {
        const newNames = [];
        const newStockQty = [];
        const newDeliveryQty = [];
        const newDates = [];

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

    // console.log('Product Name:',productNames.length, 'Stock-Qty:', stockQty.length, 'Date:', date.length);
    // console.log(date);

    const data = [
        productNames,
        // date,
        // date,
        deliveredQty,
    ];

    // const data = [
    //     [
    //         "Month",
    //         "Bolivia",
    //         "Ecuador",
    //         "Madagascar",
    //         "Papua New Guinea",
    //         "Rwanda",
    //         "Average",
    //     ],
    //     ["2004/05", 165, 938, 522, 998, 450, 614.6],
    //     ["2005/06", 135, 1120, 599, 1268, 288, 682],
    //     ["2006/07", 157, 1167, 587, 807, 397, 623],
    //     ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    //     ["2008/09", 136, 691, 629, 1026, 366, 569.6],
    // ];

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