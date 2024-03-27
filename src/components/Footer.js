import React from 'react';

const Footer = () => {
  return (
    <footer className='py-12' style={{ backgroundColor: '#f6f5ae' }}>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Store hours */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>STORE HOURS</h3>
            <p className='text-gray-800'><b>MONDAY - FRIDAY</b>: 9:00 AM - 9:00 PM</p>
            <p className='text-gray-800'><b>SATURDAY</b>: 10:00 AM - 8:00 PM</p>
            <p className='text-gray-800'><b>SUNDAY</b>: 11:00 AM - 6:00 PM</p>
          </div>
          {/* Address */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>ADDRESS</h3>
            <p className='text-gray-800'>3236 Magazine St.</p>
            <p className='text-gray-800'>New Orleans, LA 70115</p>
          </div>
          {/* Contact */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>CONTACT</h3>
            <p className='text-gray-800'><b>Phone</b>: (504) 867-5309</p>
            <p className='text-gray-800'><b>Email</b>: info@primaryoutlet.com</p>
          </div>
        </div>
        {/* Copyright */}
        <p className='text-black text-right mt-8'>
          &copy; Final Capstone Project / E-Commerce 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
