'use client';

import {
    ShoppingCartIcon,
    HeartIcon as FavoriteIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { toUrlSlug } from '@/lib/utils';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
// import { addToFavorites } from '@/lib/data';
const addToFavorites = (name: string) => {
    console.log(name);
}

export default function Component({ name, image_url, price, favorite }: { name: string, image_url: string, price: number, favorite: boolean }) {
    const [hoverCard, setHoverCard] = useState(false);

    const addToFavorites = () => {
        console.log(name);
    }

    return (
        <div
            className="w-[150px] h-[250px] grid hover:bg-primary-eerie_black-600 bg-primary-eerie_black-500 border-none rounded-lg shadow-lg text-white ease-in-out transition-all duration-300"
            onMouseEnter={() => setHoverCard(true)}
            onMouseLeave={() => setHoverCard(false)}
            >
            <Image
                src={image_url}
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
                        ${price}
                    </p>
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
                <Link
                    href={`/market/${toUrlSlug(name)}`}
                    className='text-primary-ebony-300 hover:text-primary-olivine grid place-items-center w-full rounded-sm bg-primary-ebony-200 hover:bg-primary-ebony-200 px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 ease-in-out transition-all duration-300'
                >
                    <ShoppingCartIcon className="w-6" />
                </Link>
            </div>
        </div>
    );
}