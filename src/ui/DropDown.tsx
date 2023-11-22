'use client'
// components/Dropdown.js or Dropdown.tsx
import React, { ReactComponentElement, useState } from 'react';
// include the required stuff from next/navigation to modify the current query
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface SortObject {
  name: string;
  icon: string;
  dir: string;
}

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  CalculatorIcon,
  CalendarIcon,
  MapIcon
} from '@heroicons/react/24/solid';

const sorts = [
  {
    name: 'Price',
    icon: 'CurrencyDollarIcon',
  },
  {
    name: 'Float',
    icon: 'CalculatorIcon',
  },
  {
    name: 'Date',
    icon: 'CalendarIcon',
  },
]

// sorts should now be doubled in size to include the increasing and decreasing icons
// do this by popping from sorts
// and then pushing the same object with the opposite icon
let format_sorts: SortObject[] = []

while (sorts) {
  let sort = sorts.pop()
  if (!sort) {
    break
  }
  format_sorts.push({
    name: sort.name,
    icon: sort.icon,
    dir: 'up'
  })
  format_sorts.push({
    name: sort.name,
    icon: sort.icon,
    dir: 'down'
  })
}

// reverse formatted sorts
format_sorts = format_sorts.reverse()

// add default to end
format_sorts.push({
  name: 'Default',
  icon: 'MapIcon',
  dir: 'None'
})

export default function DropDown() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  // get the sort if any from the query
  const url_sort = searchParams.get('sort')?.toString() ?? '';
  let sort_word = url_sort.split('.')[0]
  let sort_dir = url_sort.split('.')[1]
  if (sort_dir) {
    sort_dir = sort_dir == 'asc' ? 'up' : 'down';
  } else {
    sort_dir = 'None';
  }

  // capitalize sort_word
  if (sort_word) {
    sort_word = sort_word.charAt(0).toUpperCase() + sort_word.slice(1);
  } else {
    sort_word = 'Default';
  }

  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(sort_word);
  const [sortDir, setSortDir] = useState(sort_dir);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const updateSort = (sort: SortObject) => () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', '1');
    if (sort.name !== 'Default') {
      newParams.set('sort', (sort.dir === 'up' ? sort.name.toLowerCase() + '.asc' : sort.name.toLowerCase() + '.desc'));
    } else {
      newParams.delete('sort');
    }
    replace(`${pathname}?${newParams.toString()}`);
    setIsOpen(false);
    console.log(sort)
    setSort(sort.name);
    setSortDir(sort.dir);
  }

  return (
    <div
      className='text-sm grid place-content-center bg-primary-eerie_black h-10 p-2 border border-primary-olivine col-span-2'
      style={{ position: 'relative' }}>
      <button onClick={toggleDropdown}>
        <div className='flex flex-row justify-center items-center text-primary-olivine'>
          {
            // toggle the icon based on the dropdown state
            isOpen ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronDownIcon className='h-5 w-5' />
          }
          <span className=''>{sort}</span>
          {sortDir == 'up' && <ArrowUpIcon className="h-5 w-5 ml-2" />}
          {sortDir == 'down' && <ArrowDownIcon className="h-5 w-5 ml-2" />}

        </div>
      </button>
      {isOpen && (
        <div
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
            // Dropdown content
            // You can pass children here, or map through an array
            // to create a list of items, add each item twice
            // once with the increasing icon, and once with the decreasing icon
            // You can also use the same icon for all items
            format_sorts.map((s) => (
              <button
                onClick={updateSort(s)}
                className='flex text-primary-olivine-300 w-full align-middle  hover:bg-primary-eerie_black-300 hover:text-white ease-in-out transition-all duration-150'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                  cursor: 'pointer',
                }}>
                {s.icon === 'CurrencyDollarIcon' && <CurrencyDollarIcon className="h-5 w-5 mr-2" />}
                {s.icon === 'CalculatorIcon' && <CalculatorIcon className="h-5 w-5 mr-2" />}
                {s.icon === 'CalendarIcon' && <CalendarIcon className="h-5 w-5 mr-2" />}
                <span>{s.name}</span>
                {s.dir === 'up' && <ArrowTrendingUpIcon className="h-5 w-5 ml-2" />}
                {s.dir === 'down' && <ArrowTrendingDownIcon className="h-5 w-5 ml-2" />}
              </button>
            ))}
        </div>)}
    </div>);

}