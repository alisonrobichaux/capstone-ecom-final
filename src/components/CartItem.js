import React from 'react';
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

const CartItem = ({ item }) => {
  
  const  {id, title, image, price, amount } = item;
  return ( 
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      {/* image */}
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt='' />
       </Link>
       <div className='w-full flex flex-col'>
        {/* title & remove icon */}
        <div className='flex justify-between mb-2'>

          {/* title*/}
          <Link to={`/product/${id}`} className='text-sm uppercase font-medium wax-w-[240px] text-primary
          hover:underline'
          >
            {title}
            </Link>
            {/* remove icon */}
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />

              <div className='flex gap-x-2 h-[36px] text-sm'>

            {/* qty */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary
            font-medium'>
              {/* minus icon */}
             <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
              <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              {/* plus icon*/}
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd />
              </div>

            </div>
            {/* item price */}
            <div>$ {price}</div>
            {/* final price */}
             <div>{`$ ${price * amount}`}</div>
          </div>

            </div>
          </div>
        </div>
      </div>

  );
};

export default CartItem;
