'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  CogIcon,
  BoltIcon,
  ScaleIcon,
  WalletIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Carter_One } from 'next/font/google';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  // make a buy link with a shopping cart icon, and a sell link with a money icon
  // an instant sell link with a lightning bolt icon, and a trade link with a handshake icon
  // a link to the user's inventory with a backpack icon, and a link to the user's wallet with a wallet icon
  // a link to the user's profile with a person icon, and a link to the user's settings with a gear icon
  // a link to cashout with a printer icon and a link to the user's history with a clock icon

  { name: 'Buy', icon: ShoppingCartIcon, href: '/market/buy' },
  { name: 'Sell', icon: CurrencyDollarIcon, href: '/market/sell' },
  { name: 'Instant Sell', icon: BoltIcon, href: '/market/instant-sell' },
  { name: 'Trade', icon: ScaleIcon, href: '/market/trade' },
  { name: 'Inventory', icon: WalletIcon, href: '/market/inventory' },
  { name: 'History', icon: ClockIcon, href: '/market/history' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            aria-label={link.name}
            aria-description={link.name}
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 bg-transparent p-3 text-sm font-medium hover:bg-primary-olivine hover:bg-opacity-5 hover:text-primary-olivine  text-primary-olivine-300 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-opacity-5 bg-primary-olivine text-primary-olivine": link.href === pathname,
          },)}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
