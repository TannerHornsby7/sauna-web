// create a basic market page
import React from 'react';
import Pagination from '@/ui/market/Pagination';
import Search from '@/ui/search';
import Table from '@/ui/market/Table';
import { lusitana } from '@/ui/fonts';
import { ListingsTableSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
import { fetchAssetPages } from '@/lib/data';
import SortDial from '@/ui/market/SortDial';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    MagnifyingGlassCircleIcon,
    PowerIcon,
    HeartIcon,
} from '@heroicons/react/24/outline';
import DropDown from '@/ui/DropDown';
import '@/ui/styles.css';

// set the metadata
export const metadata = {
    title: 'Market',
    description: 'Unbox the future of Steam Markets.',
};

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
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchAssetPages(query);
    const sort = searchParams?.sort || '';
    return (
        <div className="w-full p-4 -mt-4">
            <div className="mt-4 flex md:mt-8">
                <div className="flex place-items-center">
                    <div className='flex justify-center text-primary-ebony-500'>
                        <PowerIcon className="mr-2 h-5 w-5 text-primary-olivine" />
                        |
                        <HeartIcon className="mx-2 h-5 w-5 text-primary-olivine" />
                    </div>
                    <Search placeholder="Search assets..." />
                    <DropDown />
                </div>
                {/* add a cart that keeps track of added items */}
            </div>
            <Suspense key={query + currentPage} fallback={<ListingsTableSkeleton />}>
                <Table query={query} currentPage={currentPage} sort={sort} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
