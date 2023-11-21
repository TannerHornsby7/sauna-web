// create an assets table that is async an pull data from the api
import MarketCard from "@/ui/market/Card";
import { fetchFilteredAssets } from "@/lib/data";

export default async function AssetsTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const assets = await fetchFilteredAssets(query, currentPage);
    return (
      <div className="w-full place-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-flow-row">
        {assets.map((asset) => (
          <MarketCard key={asset.id} name={asset.name} price={asset.price} image_url={asset.image_url} />
        ))}
      </div>
    );
    }
