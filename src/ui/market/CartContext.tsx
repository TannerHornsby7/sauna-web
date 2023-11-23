'use client'
// CartContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Asset, CartAsset } from '@/types'; // Import the Asset type



// Define a type for the context
type CartContextType = {
    cartItems: CartAsset[];
    addToCart: (item: Asset) => void;
    removeFromCart: (item: Asset) => void;
};

// Create the context with a default value
export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

// Define the type for CartProvider props
type CartProviderProps = {
    children: ReactNode;
};

// Define a provider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartAsset[]>([]);

    const addToCart = (item: Asset) => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex === -1) {
            // item isn't in the cart yet, so add it
            setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
            return;
        } else {
            // item is already in the cart, so update its quantity by 1
            cartItems[itemIndex].quantity += 1;
            setCartItems([...cartItems]);
        }
    };

    const removeFromCart = (item: Asset) => {
        // get the index
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        // if the item is in the cart, remove it
        if (itemIndex !== -1 && cartItems[itemIndex].quantity == 1) {
            // delete the item from the cart
            cartItems.splice(itemIndex, 1);
            setCartItems([...cartItems]);
        } else {
            // item is already in the cart, so update its quantity by 1
            cartItems[itemIndex].quantity -= 1;
            setCartItems([...cartItems]);
        }
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);
