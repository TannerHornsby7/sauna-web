import Link from 'next/link';
import NavLinks from '@/ui/market/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import SaunaLogo from '@/ui/SaunaLogo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from 'next-auth/react';
// import { time } from 'console';
// import { signOut } from '@/auth';
async function signOut() {
    // wait 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('signing out')
  return;
}

export default function SideNav() {
  return (
    <div className="md:w-min flex h-full flex-col px-3 py-4 md:px-2 bg-primary-eerie_black">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden bg-transparent h-auto w-full grow rounded-md md:block"></div>
      </div>
    </div>
  );
}
