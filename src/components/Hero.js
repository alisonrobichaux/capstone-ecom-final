import React from 'react';
import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold text-[30px] flex items-center uppercase'>
            <div className='w-20 h-[5px] bg-red-500 mr-3'></div>Up to 70% off
          </div>
          <h1 className='text-[100px] font-semibold leading-[1.1] font-light mb-4 winter-sale'>
            WINTER SALE <br />
          </h1>
          <Link to={'/product-page'} className='self-start uppercase font-semibold border-b-2 border-primary'>
            Shop Now
          </Link>
        </div>

        {/* image */}
        <div className='hidden lg:block'>
          <img className='w-[450px]' src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

