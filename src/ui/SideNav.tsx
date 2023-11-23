import NavLinks from '@/ui/market/nav-links';

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
