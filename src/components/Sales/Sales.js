import React, {useContext, useState} from 'react';
import './sales.css';
import {SalesContext} from '../../contexts/SalesContext';

const Sales = () => {
    const [sales, setSales] = useContext(SalesContext);
    const [ amount, setAmount] = useState('');
    const [ originalAmount, setOriginalAmount] = useState('');

    const updateAmount = e => {
        setAmount(e.target.value);
    }

    const updateOriginalAmount = e => {
        setOriginalAmount(e.target.value);
    }

    const addNewSale = e => {
        e.preventDefault();
        setSales([
            ...sales, {
                amount: parseInt(amount),
                originalAmount: parseInt(originalAmount),
                id:Math.random()*1000|0
            }
        ]);
    }

    return (
        <div className="sales">
            <h1>Add Sale</h1>
            <form onSubmit={addNewSale} className="salesForm">
                <input type="text" name="amount" placeholder="Amount" value={amount} onChange={updateAmount} /> &nbsp;
                <input type="text" name="originalAmount" placeholder="Original Amount" value={originalAmount} onChange={updateOriginalAmount}/>
                <br/>
                <br/>
                <button>Add</button>
            </form>
            <h2>Sales details</h2>
            {sales.map(item =>(
                <div key={item.id} className="saledItem">
                    <span className="saledItem">Item : {item.id}</span>
                    <span className="saledItem">Sale Amount : {item.amount}</span>
                    <span className="saledItem">Original Amount : {item.originalAmount}</span>
                </div>
            ))}
        </div>
    );
}

export default Sales;