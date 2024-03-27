import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart, increaseQuantity } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false); 
  const [quantity, setQuantity] = useState(1); 

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  const handleAddToCart = () => {
    addToCart(product, product.id); 
    setAddedToCart(true); 
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id);
    setQuantity(quantity + 1); 
  };

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        {/* image & text wrapper*/}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx'>
              {title}
            </h1>
            <div className='text-xl text-blue-500 font-medium mb-6'>
              $ {price}
            </div>
            <p className='mb-8'>{description}</p>
            {/* Conditional rendering for button */}
            {addedToCart ? (
              <div className='flex'>
                <button className='bg-green-500 py-4 px-8 text-white'>
                  Added to Cart
                </button>
                <button
                  onClick={handleIncreaseQuantity}
                  className='bg-blue-500 py-4 px-4 text-white ml-4'
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className='bg-primary py-4 px-8 text-white'
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
