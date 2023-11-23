'use client'

import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Asset } from '@/types/index';

type CartModalProps = {
  cartItems: Asset[];
  isOpen: boolean;
  onClose: () => void;
};

const CartModal: React.FC<CartModalProps> = ({ cartItems, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <div className='flex justify-between'>
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 font-bold py-2 px-4 rounded -mt-4 ease-in-out transition-all duration-300"
          >
            X
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - <span className="font-semibold">${item.avg_price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <button 
          onClick={() => onClose()}
          className="bg-primary-olivine hover:bg-primary-olivine-300 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

type ShoppingCartBtnProps = {
  cartItems: Asset[];
  onOpenModal: () => void;
};

const ShoppingCartBtn: React.FC<ShoppingCartBtnProps> = ({ cartItems, onOpenModal }) => {
  const itemCount = cartItems.length;

  return (
    <div 
      onClick={onOpenModal} 
      className="h-10 w-12 grid  place-content-center cursor-pointer rounded-sm relative text-lg bg-primary-olivine text-primary-eerie_black ease-in-out transition-all duration-300 hover:text-white"
    >
      <ShoppingCartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const cartItems = [] as Asset[];
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <ShoppingCartBtn cartItems={cartItems} onOpenModal={handleOpenModal} />
      <CartModal cartItems={cartItems} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}


export default ShoppingCart;
