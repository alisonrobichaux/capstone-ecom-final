import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Event listener
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>

        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[200px]' src={Logo} alt="" />
          </div>
        </Link>

        

        {/* Cart */}
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <div className='relative'>
            <div className='bg-white opacity-100 w-[55px] h-[55px] rounded-full flex justify-center items-center'>
              <BsBag className='text-3xl' />
            </div>
            <div className='bg-red-400 absolute -right-0 -bottom-0 text-[12px] w-[23px] h-[23px] text-white rounded-full flex justify-center items-center'>
              {itemAmount}
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
