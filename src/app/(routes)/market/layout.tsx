import SideNav from '@/ui/SideNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Market',
  };

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-32">
                <SideNav />
            </div>
            <div className="flex-grow p-2 overflow-y-auto md:p-2">{children}</div>
        </div>
    );
}