import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from '../Rating/Rating';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props
    const { img, name, price, ratings, seller } = product
    return (
        <div className='col-lg-4 col-md-6 rounded-1'>
            <div className="cart  mx-2 my-3 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-2 ' src={img} alt="" />
                </div>
                <div className='ps-3'>
                    <h5 className='mt-2'>{name.slice(0, 15)}</h5>
                    <h6 className='mb-4'>Price : $ {price}</h6>
                    <p className='mb-0'><small>Manufacturer : {seller}</small></p>
                    <Rating ratings={ratings}></Rating>
                </div>
                <button className='cart-btn' onClick={() => handleAddToCart(product)}>
                    <p className='my-2'>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Product;