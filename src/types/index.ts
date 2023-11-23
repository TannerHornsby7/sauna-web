export interface User {
  id: string
  name: string
  email: string
  phash: string
  profpic: string
  createdAt: Date
  trade_url: string
}

export interface Asset {
    id: string
    name: string
    tags: string
    desc: string
    image: string
    steam_id: string
    avg_price: number
    avg_vol: number
    fungible: boolean
    book_id: number
}

export interface Transaction {
    id: string
    price: number
    amount: number
    asset_id: string
    seller_id: string
    buyer_id: string
    status: string
    createdAt: Date
}

export type CartAsset = Asset & {
    quantity: number;
};

export type CartProps = {
    cartItems: CartAsset[];
};
