import React from 'react';

const OrderConfirmationPage = ({ orderId, estimatedDeliveryDate }) => {
    return (
        <div className="container mx-auto mt-8 flex flex-col justify-center items-center pt-60 pb-60">
            <h2 className="text-4xl font-semibold mb-4">Order Confirmation</h2>
            <div className="bg-white shadow-md px-8 py-6 mb-4 w-full max-w-md">
                <p className="mb-4">Your order has been successfully placed!</p>
                <p className="mb-4">Order Number: {orderId}</p>
                <p className="mb-4">Estimated Delivery Date: {estimatedDeliveryDate}</p>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
