'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

export default function Component() {
    // get the current url using next/navigation
    const url = usePathname();
    let home = false
    if (url == '/') {
        home = true
    }
    let run = ''

    return (
        <Breadcrumb aria-label="Default breadcrumb example" className={` pl-2 bg-primary-olivine dark:bg-primary-eerie_black text-primary-eerie_black dark:text-primary-olivine-900 ${home ? 'invisible' : ''}`}>
            {/* iterate through the url by '/' creating new breadcrumb item */}
            <Breadcrumb.Item href="/">
                <HiHome />
            </Breadcrumb.Item>
            {
                url.split('/').map((item, index) => {
                    //if index is 0, return nothing
                    if (index == 0) {
                        return ''
                    }
                    run += `/${item}`
                    return <Breadcrumb.Item className="italic capitalize" href={run} key={index}>{item}</Breadcrumb.Item>
                })}
        </Breadcrumb>
    );
}