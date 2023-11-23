// create a basic market page
import React from 'react';
import Pagination from '@/ui/market/Pagination';
import Search from '@/ui/Search';
import Table from '@/ui/market/Table';
import ShoppingCartBtn from '@/ui/market/Cart';
import { ListingsTableSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
import { fetchAssetPages } from '@/lib/data';
import DropDown from '@/ui/DropDown';

import {
    PowerIcon,
    HeartIcon,
} from '@heroicons/react/24/outline';
import '@/ui/styles.css';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
        sort?: string;
    };
}) {
    const query = searchParams?.query || '';
    const sort = searchParams?.sort || '';
    const currentPage = parseInt(searchParams?.page || '1');
    const totalPages = await fetchAssetPages(query);

    return (
        <div className="w-full p-4 -mt-4">
            <div className="flex justify-between mt-4 md:mt-8">
                <div className='flex place-items-center'>
                    <div className='flex justify-center text-primary-ebony-500'>
                        <PowerIcon className="mr-2 h-5 w-5 text-primary-olivine" />
                        |
                        <HeartIcon className="mx-2 h-5 w-5 text-primary-olivine" />
                    </div>
                    <Search placeholder="Search assets..." />
                    <DropDown />
                </div>
                <ShoppingCartBtn />
            </div>
            <Suspense key={query + currentPage + sort} fallback={<ListingsTableSkeleton />}>
                <Table query={query} currentPage={currentPage} sort={sort} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
