'use client'
// components/Dropdown.js or Dropdown.tsx
import React, { ReactComponentElement, useState } from 'react';

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
    dir: 'ArrowTrendingUpIcon'
  })
  format_sorts.push({
    name: sort.name,
    icon: sort.icon,
    dir: 'ArrowTrendingDownIcon'
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


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('Default');
  const [sortDir, setSortDir] = useState('None');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const updateSort = (sort: SortObject) => () => {
    console.log(sort)
    setSort(sort.name);
    setSortDir(sort.dir);
  }

  return (
    <div
      className='bg-primary-eerie_black h-9 p-3 pt-1 border border-primary-olivine'
      style={{ position: 'relative' }}>
      <button onClick={toggleDropdown}>
        <div className='flex flex-row justify-center items-center text-primary-olivine'>
          {
            // toggle the icon based on the dropdown state
            isOpen ? <ChevronUpIcon className='h-5 w-5' /> : <ChevronDownIcon className='h-5 w-5' />
          }
          <span className=''>{sort}</span>
          {sortDir == 'ArrowTrendingUpIcon' && <ArrowUpIcon className="h-5 w-5 ml-2" />}
          {sortDir == 'ArrowTrendingDownIcon' && <ArrowDownIcon className="h-5 w-5 ml-2" />}

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
                {s.dir === 'ArrowTrendingUpIcon' && <ArrowTrendingUpIcon className="h-5 w-5 ml-2" />}
                {s.dir === 'ArrowTrendingDownIcon' && <ArrowTrendingDownIcon className="h-5 w-5 ml-2" />}
              </button>
            ))}
        </div>)}
    </div>);

}

export default Dropdown;
