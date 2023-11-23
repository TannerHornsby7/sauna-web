'use client'
import {
    AdjustmentsHorizontalIcon as Icky,
    CurrencyDollarIcon as Dollar,
    HeartIcon as Heart,
} from '@heroicons/react/24/solid';
// components/Dropdown.js or Dropdown.tsx
import React, { useState } from 'react';
// include the required stuff from next/navigation to modify the current query
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const filters = [
    {
        name: 'Price',
        icon: 'CurrencyDollarIcon',
    },
    {
        name: 'Favorites',
        icon: 'HeartIcon',
    }
] as FilterObject[];

interface FilterObject {
    name: string;
    icon: string;
}

export default function Filters() {
    const [open, setOpen] = useState(false);
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const toggleDropdown = () => {
        setOpen(!open);
    }

    // get the filters if any from the query
    const url_filter_s = searchParams.get('filter')?.toString() ?? '';
    // parse into an array
    const url_filters = url_filter_s.split('.');
    // create a set of the filters
    const url_filter_set = new Set(url_filters);

    const updateFilters = (filter: string) => () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', '1');
        // if the filter is already in the set, remove it
        if (url_filter_set.has(filter)) {
            url_filter_set.delete(filter);
        } else {
            // otherwise add it
            url_filter_set.add(filter);
        }
        // join the set into a string
        let new_filter_s = Array.from(url_filter_set).join('.');
        // remove the first charcter of the string
        new_filter_s = new_filter_s.slice(1);
        // set the filter
        newParams.set('filter', new_filter_s);
        // replace the url
        replace(`${pathname}?${newParams.toString()}`);
    }
    return (
        <div
            className='text-sm grid place-content-center bg-primary-eerie_black h-10 p-2 border border-primary-olivine col-span-2'
            style={{ position: 'relative' }}>
            <button 
            className='flex flex-row justify-center items-center hover:cursor-pointer className="mr-2 h-5 w-5 text-primary-olivine'
            onClick={()=>{toggleDropdown()}}
            >
                <Icky className='h-5 w-5' />
            </button>
            {open && (<div
                className='flex flex-col align-middle border border-primary-olivine justify-center bg-primary-eerie_black'

                style={{
                    position: 'absolute',
                    top: '100%', // Position right below the button
                    left: 0,
                    zIndex: 1000, // Ensure it's above other elements
                    padding: '2px',
                    width: '115px',
                    display: 'flex' // Adjust width as needed
                }}>{
                    filters.map((f) => (
                        <button
                            key={f.name}
                            onClick={updateFilters(f.name.toLowerCase())}
                            className='flex text-primary-olivine-300 w-full align-middle  hover:bg-primary-eerie_black-300 hover:text-white ease-in-out transition-all duration-150'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '5px',
                                cursor: 'pointer',
                            }}>
                            {f.icon === 'CurrencyDollarIcon' && <Dollar className="h-5 w-5 mr-2" />}
                            {f.icon === 'HeartIcon' && <Heart className="h-5 w-5 mr-2" />}
                            <span>{f.name}</span>
                        </button>
                    ))}
            </div>)}
        </div>);
}