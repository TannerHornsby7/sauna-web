'use client';

import {
    EyeIcon as ViewIcon,
    ShoppingCartIcon,
    HeartIcon as FavoriteIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { toUrlSlug } from '@/lib/utils';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import React from 'react';
import { Asset } from '@/types';
import { useCart } from '@/ui/market/CartContext';

type ProductCardProps = {
    key: string;
    asset: Asset;
    favorite: boolean;
};
// import { addToFavorites } from '@/lib/data';
const addToFavorites = (name: string) => {
    console.log(name);
}
// make sure component fits this call:
{/* <MarketCard key={asset.id} asset={asset} favorite={false} /> */ }
export default function MarketCard({ key, asset, favorite }: ProductCardProps) {
    const { id, name, avg_price, image } = asset;
    const [hoverCard, setHoverCard] = useState(false);
    const { cartItems, addToCart, removeFromCart } = useCart();

    const handleAddToCart = () => {
        console.log('adding to cart', asset)
        addToCart(asset);
    }

    const handleRemoveFromCart = () => {
        console.log('removing from cart', asset)
        removeFromCart(asset);
    }

    const getQuantity = (asset: Asset) => {
        const cartItem = cartItems.find(cartItem => cartItem.id === asset.id);
        return cartItem ? cartItem.quantity : 0;
    }

    const addToFavorites = () => {
        console.log(name);
    }

    return (
        <div
            className="relative z-0 w-[150px] h-[250px] grid hover:bg-primary-eerie_black-600 bg-primary-eerie_black-500 border-none rounded-lg shadow-lg text-white ease-in-out transition-all duration-300"
            onMouseEnter={() => setHoverCard(true)}
            onMouseLeave={() => setHoverCard(false)}
        >
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
            />
            <div className="h-min grid grid-rows-2 -mt-16 p-2">
                <p className="text-center text-primary-olivine-900 h-8 font-semibold text-sm tracking-tight dark:text-white">
                    {name}
                </p>
                <div className="w-full flex justify-between align-middle pt-2">
                    <p className="text-primary-olivine">
                        ${avg_price}
                    </p>
                    <Link
                        href={`/market/${toUrlSlug(name)}`}
                        aria-label="View Asset Details"
                        title='View Asset Details'
                        className={clsx(
                            'grid place-items-center w-5 h-5 hover:text-blue-950 ease-in-out transition-all duration-300',
                            {
                                'text-white': hoverCard && !favorite,
                                'bg-opacity-0 hidden': !hoverCard,
                            },
                        )}
                    >
                        <ViewIcon className="w-5" />
                    </Link>
                    <button
                        formAction={addToFavorites}
                        aria-label="Add to favorites"
                        title='Add to favorites'
                        className={clsx(
                            'grid place-items-center w-5 h-5 hover:text-pink-700 ease-in-out transition-all duration-300',
                            {
                                'text-white': hoverCard && !favorite,
                                'text-pink-700': !hoverCard && favorite,
                                'bg-opacity-0 hidden': !hoverCard,
                            },
                        )}
                    >
                        <FavoriteIcon className="w-5" />
                    </button>
                </div>
            </div>
            <div className="h-min flex p-6 pt-0 items-center justify-between ">
                <button
                    onClick={handleAddToCart}
                    className='h-10 text-primary-ebony-300 hover:text-primary-olivine grid place-items-center w-full rounded-sm bg-primary-ebony-200 hover:bg-primary-ebony-200 px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 ease-in-out transition-all duration-300'
                >
                    <ShoppingCartIcon className="w-6" />
                </button>
                {getQuantity(asset) > 0 && (<span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">{getQuantity(asset)}</span>)}
                {getQuantity(asset) > 0 && (<div className="h-10 flex flex-col justify-between w-full">
                    <button
                        onClick={() => addToCart(asset)}
                        className="bg-primary-olivine hover:bg-primary-olivine-300 text-white text-sm font-bold rounded"
                    >
                        +
                    </button>
                    <button
                        onClick={handleRemoveFromCart}
                        className="bg-primary-olivine hover:bg-primary-olivine-300 text-white text-sm font-bold rounded"
                    >
                        -
                    </button>
                </div>)}

            </div>
        </div>
    );
}