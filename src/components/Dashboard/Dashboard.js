import React, {useContext, useEffect, useState} from 'react';

import {SalesContext} from '../../contexts/SalesContext';

import './Dashboard.css';

const Dashboard = () => {
    const [sales, setSales] = useContext(SalesContext);
    let [totalSales, setTotalSales] = useState(0);
    let [totalProfit, setTotalProfit] = useState(0);
    
    useEffect(() => {
        calculateTotalSale();
        calculateTotalProfit();
    });

    const calculateTotalSale = () => {
        const salesAmount = sales.map((value) => value['amount']);
        console.log(salesAmount);
        totalSales = salesAmount.reduce((sum,num)=>sum+num, 0);
        setTotalSales(totalSales);
    }
    const calculateTotalProfit = () => {
        const salesAmount = sales.map((value) => value['originalAmount']);
        console.log(salesAmount);
        totalProfit = salesAmount.reduce((sum, num)=>sum + num, 0);
        totalProfit = totalSales - totalProfit;
        setTotalProfit(totalProfit);
    }

    return (
        <div className="dashboard">
            <div className="main">
                <div>
                    <h1><center>Total Sale</center></h1>
                    <h3><center>{totalSales}</center></h3>
                </div>
                <div>
                    <h1><center>Total Profit</center></h1>
                    <h3><center>{totalProfit}</center></h3>
                </div>
            </div>           
        </div>

    );
}

export default Dashboard;