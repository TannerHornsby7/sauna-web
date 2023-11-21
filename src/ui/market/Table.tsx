// create an assets table that is async an pull data from the api
import '@/ui/styles.css';
import MarketCard from "@/ui/market/MCard";
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
      <div className="w-full gap-1 p-2 place-items-center grid flowgrid">
        {assets.map((asset) => (
          <MarketCard key={asset.id} name={asset.name} price={asset.price} image_url={asset.image_url} favorite={false} />
        ))}
      </div>
    );
    }
