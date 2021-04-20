import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeSelectedProduct} from '../../redux/actions/productActions';

const ProductDetails = () => {
    const product =  useSelector(state=>state.product);
    const dispatch = useDispatch();
    const { productID } = useParams();
    useEffect(() => {
        console.log('product details');
        fetchProductDetails();
        return () =>{
            dispatch(removeSelectedProduct());
        }
    }, [productID]);

    const fetchProductDetails = async () =>{
        const productDetails  = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch(err=>console.log(err));
        dispatch(selectedProduct(productDetails.data));
    }

    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div>....Loading</div>
            ): (
                <div>
                    <h1>Product Title : {product.product.title} </h1>
                    <h5>Product Description : {product.product.description}</h5>
                    <h5>Price : {product.product.price}</h5>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;