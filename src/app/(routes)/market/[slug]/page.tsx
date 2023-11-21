// display a page with information about the asset that is 
// being sold. The asset is identified by the slug in the URL.
'use client'

import { usePathname } from 'next/navigation';
import { fromUrlSlug } from '@/lib/utils';

export default function Page() {
    const path = usePathname();
    const slug = path.split('/').pop();
    if (!slug) {
        console.log('no slug');
        return null;
    }

    return (<div className="flex flex-col w-full">
        {fromUrlSlug(slug)}
        </div>);
}