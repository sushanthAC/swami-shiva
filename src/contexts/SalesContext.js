import React, {useState, createContext} from 'react';

export const SalesContext = createContext();

export const SalesProvider = props => {
    const [sales, setSales] = useState([
        {
            amount:100,
            originalAmount:50,
            id:1234
        },
        {
            amount:200,
            originalAmount:50,
            id:12345
        }
    ]);

    return (
        <SalesContext.Provider value={[sales, setSales]}>
            {props.children}
        </SalesContext.Provider>
    );
}
