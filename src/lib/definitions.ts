// needs to be implemented
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
  
  export type Asset = {
    id: string;
    name: string;
    tags: string;
    image_url: string;
    price: number;
  };
  
  export type Receipt = {
    id: string;
    asset_id: string;
    amount: number;
    price: number;
    date: string;
    sender: string;
    receiver: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
  };
  
  export type PriceHistory = {
    month: string;
    price: number;
  };
  
  export type LatestReceipt = {
    id: string;
    asset_id: string;
    amount: number;
    price: number;
    date: string;
    sender: string;
    receiver: string;
  };
  
  // The database returns a number for amount, but we later format it to a string with the formatCurrency function
  export type LatestReceiptRaw = Omit<LatestReceipt, 'amount'> & {
    amount: number;
  };
  
  export type ReceiptsTable = {
    id: string;
    asset_id: string;
    amount: number;
    price: number;
    date: string;
    sender: string;
    receiver: string;
    status: 'pending' | 'paid';
  };
  
  export type AssetTable = {
    id: string;
    name: string;
    tags: string;
    price: number;
    image_url: string;
    total_transactions: number;
    total_pending: number;
    total_paid: number;
  };
  
  export type FormattedAssetsTable = {
    id: string;
    name: string;
    tags: string;
    image_url: string;
    total_transactions: number;
    total_pending: string;
    total_paid: string;
    price: string;
  };
  
//   export type UserField = {
//     id: string;
//     name: string;
//   };
  
//   export type ReceiptForm = {
//     id: string;
//     customer_id: string;
//     amount: number;
//     status: 'pending' | 'paid';
//   };
  