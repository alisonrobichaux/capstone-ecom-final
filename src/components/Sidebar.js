import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  const handleViewCartClick = () => {
    handleClose(); // Close the sidebar when "View Cart" is clicked
  };

  const handleCheckoutClick = () => {
    handleClose(); // Close the sidebar when "Checkout" is clicked
  };

  return ( 
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0
      h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        {/* icon */}
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
  
      <div className='flex flex-col gap-y-2 lg:h-[520px] lg:overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
  
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>
            <span className='text-primary'>$ {parseFloat(total).toFixed(2)}</span>
          </div>
          {/* clear cart icon */}
          <div onClick={clearCart} className='cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        {/* View cart */}
        <Link to='/view-cart' onClick={handleViewCartClick} className='bg-gray-200 p-4 justify-center text-primary w-full font-medium flex items-center justify-center'>
          View cart
        </Link>
        {/* Checkout */}
        <Link to='/checkout' onClick={handleCheckoutClick} className='bg-primary p-4 justify-center text-white w-full font-medium flex items-center justify-center'>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
