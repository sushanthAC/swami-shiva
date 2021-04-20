import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setProducts} from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const featchProducts = async () => {
        const products  = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err);
        });
        console.log(products.data);
        dispatch(setProducts(products.data));
    }

    useEffect(()=>{
        featchProducts();
    },[]); 

    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.title}><Link to={`/product/${product.id}`}>{product.title}</Link></li>
                ))}
            </ul>
        </div>
    );
}

export default ProductListing;