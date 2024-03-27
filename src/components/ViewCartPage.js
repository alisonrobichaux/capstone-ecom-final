import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import { SidebarContext } from '../contexts/SidebarContext';

const ViewCartPage = () => {
    const { cart, addToCart, removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

    const handleAddToCart = (product) => {
        addToCart(product, product.id);
    };

    const handleIncreaseAmount = (id) => {
        increaseAmount(id);
    };

    const handleDecreaseAmount = (id) => {
        decreaseAmount(id);
    };


    const total = cart.reduce((acc, item) => acc + (item.price * item.amount), 0);

    return (
        <div className="container mx-auto mt-60 mb-16 flex justify-center"> {/* Center the content and add bottom margin */}
            <div className="grid grid-cols-1 gap-4">
                {cart.map((item) => (
                    <div key={item.id} className="bg-white shadow-md flex items-center justify-between p-4 mb-4 rounded-md">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mr-4 rounded-md" />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <h3 className="text-sm">{item.title}</h3>
                            <p className="text-blue-600 font-semibold">${item.price}</p>
                            <div className="flex items-center">
                                <button onClick={() => handleDecreaseAmount(item.id)} className="border border-gray-400 rounded-full p-1 mr-2 hover:bg-gray-200"><IoMdRemove /></button>
                                <span>{item.amount}</span>
                                <button onClick={() => handleIncreaseAmount(item.id)} className="border border-gray-400 rounded-full p-1 ml-2 hover:bg-gray-200"><IoMdAdd /></button>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700"><IoMdClose /></button>
                    </div>
                ))}
                <div className="text-lg font-semibold mb-4">Total: ${total.toFixed(2)}</div> {/* Display total price */}
                <div className="mt-12 pb-12"> {/* Add padding to the bottom */}
                    <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceed to Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewCartPage;
