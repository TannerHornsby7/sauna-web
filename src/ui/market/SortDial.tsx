// create a dial input that sorts the table
'use client'

// get the sort query from the url
import { useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SortDial() {
    const [sort, setSort] = useState('')
    const pathname = usePathname();

    // get the sort query from the url
    const searchParams = useSearchParams();
    const sortQuery = searchParams.get('sort')

    // set the sort query to the state
    if (sortQuery) {
        setSort(sortQuery)
    }

    // create a function that updates the url with the sort query
    function updateURL() {
        const params = new URLSearchParams(searchParams);
        params.set('sort', sort);
        return `${pathname}?${params.toString()}`;
    }

    // create a dial input that sorts the table
    return (
        <div className="flex flex-col w-[50px]">
            <div className="flex flex-row">
                <div>
                    <select
                        className="text-center w-full bg-white border border-gray-300 rounded-sm shadow-sm px-2 text-gray-500 text-md font-medium"
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value)
                            updateURL()
                        }}
                    >
                        <option value="">None</option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

/*
How will state be transfered from the component to the query?
update the url with the sort query along with previous queries
*/
