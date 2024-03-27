import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = ({ handleClose }) => {
    const [shoppingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        billingAddress: '',
    });

    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePlaceOrder();
    };

    const handlePlaceOrder = () => {
        // Process order here

        // Navigate to the order confirmation page
        navigate('/order-confirmation'); // Navigate to the confirmation page
    };

    const handleCloseSidebar = () => {
        handleClose(); // Close the sidebar when called
    };

    return (
        <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-semibold mb-4'>Checkout</h2>
            <form onSubmit={handleSubmit} className='bg-white shadow-md px-8 pt-6 pb-8 mb-4 w-full max-w-md'>
                <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type='text' id='name' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                    focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm' required />
                </div>
                <div className='mb-4'>
                    <label htmlFor='cardNumber' className='block text-sm font-medium text-gray-700'>Credit Card Number</label>
                    <input type='text' id='cardNumber' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                    focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm' required />
                </div>
                <div className='mb-4'>
                    <label htmlFor='cvv' className='block text-sm font-medium text-gray-700'>CVV</label>
                    <input type='text' id='cvv' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                    focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm' required />
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
