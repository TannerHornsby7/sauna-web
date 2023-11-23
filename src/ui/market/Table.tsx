// create an assets table that is async an pull data from the api
import '@/ui/styles.css';
import MarketCard from "@/ui/market/MCard";
import { fetchFilteredAssets } from "@/lib/data";
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
  // if assets isn't a list, return an empty list
  if (!Array.isArray(assets)) {
    throw new Error('Assets is not a list');
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full gap-1 p-2 place-items-center grid flowgrid">
        {assets.map((asset) => (
          <MarketCard key={asset.id} asset={asset} favorite={false} />
        ))}
      </div>
    </Suspense>
  );
}
