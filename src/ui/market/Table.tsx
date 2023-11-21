// create an assets table that is async an pull data from the api
import '@/ui/styles.css';
import MarketCard from "@/ui/market/MCard";
import { fetchFilteredAssets } from "@/lib/data";
// the table shouldn't cache the data, so we use a dynamic import
// to make sure it's not bundled with the rest of the page
import { Suspense } from 'react';

export default async function AssetsTable({
  query,
  currentPage,
  sort,
}: {
  query: string;
  currentPage: number;
  sort: string;
}) {
  const assets = await fetchFilteredAssets(query, currentPage, sort);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full gap-1 p-2 place-items-center grid flowgrid">
        {assets.map((asset) => (
          <MarketCard key={asset.id} name={asset.name} price={asset.price} image_url={asset.image_url} favorite={false} />
        ))}
      </div>
    </Suspense>
  );
}
