import React, { useState } from 'react';

const CheckoutPage = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container mx-auto mt-8'>
            <h2 className='text-4xl font-semibold mb-4'>Checkout</h2>
            {/*Shopping Cart Summary */}
            {/*Shipping Information Form */}
            <form onSubmit={handleSubmit} className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'>
                {/*Shipping Information */}
                <div className='mb-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type='text' id='name' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                    focus:ring-indigo-200 focus: border-indigo-500 sm:text-sm' required />
                </div>
                {/* Other shipping fields */}
                {/* Payment info */}
                <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Credit Card Number</label>
                    <input type='text' id='name' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                    focus:ring-indigo-200 focus: border-indigo-500 sm:text-sm' required />
                </div>
                 {/* Place Order Button*/}
                 <button type='submit' className='bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'>Place Order</button>
            </form>
        </div>
    );

};

export default CheckoutPage;