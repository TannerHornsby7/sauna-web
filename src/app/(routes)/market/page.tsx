// create a basic market page
import React from 'react';
import Pagination from '@/ui/market/Pagination';
import Search from '@/ui/search';
import Table from '@/ui/market/Table';
import { lusitana } from '@/ui/fonts';
import { ListingsTableSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
import { fetchAssetPages } from '@/lib/data';
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';

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
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchAssetPages(query);
    return (
        <div className="w-full p-4 -mt-4">
            <div className="mt-4 flex items-center justify-between md:mt-8">
                <Search placeholder="Search assets..." />
            </div>
            <Suspense key={query + currentPage} fallback={<ListingsTableSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
