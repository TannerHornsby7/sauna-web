'use client';

import {
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import { toUrlSlug } from '@/lib/utils';

export default function Component({ name, image_url, price }: { name: string, image_url: string, price: number }) {

  return (
    <Card
      className="w-44 h-64 grid hover:bg-primary-eerie_black-600 max-w-sm bg-primary-eerie_black-500 border-none rounded-sm shadow-lg text-white"
      imgAlt={name}
      imgSrc={image_url}
    >
      <div className="h-min grid grid-rows-2 -mt-16">
        <p className="text-primary-olivine-900 h-8 font-semibold text-sm tracking-tight dark:text-white">
          {name}
        </p>
        <span className="h-min flex flex-end font-bold text-primary-olivine dark:text-white p-1">${price}</span>
      </div>
      <div className="h-min flex items-center justify-between">
        <Link
          href={`/market/${toUrlSlug(name)}`}
          className='-mt-4 text-primary-ebony-300 hover:text-primary-olivine grid place-items-center w-full rounded-lg bg-primary-ebony-200 hover:bg-primary-ebony-200 px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4'
        >
          <ShoppingCartIcon className="w-6" />
        </Link>
      </div>
    </Card>
  );
}
