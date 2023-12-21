// needs to be implemented
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
// Some API or utility file
import prisma from './prismaClient';

const queryToORM: {
    [key: string]: string;
} = {
    'price': 'avg_price',
}

export async function fetchAssets() {
    noStore();
    try {
        const assets = prisma.asset.findMany();
        return assets;
    } catch (error) {
        console.error('Database Error:', error);
        // close the database connection
        await prisma.$disconnect();
        throw new Error('Failed to fetch assets.');
    }
}

// fetch pages for assets
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredAssets(
    query: string,
    currentPage: number,
    sort: string,
    filters: string,
) {
    noStore();
    let sortColumn = 'name';
    let sortOrder = 'asc';

    if (sort) {
        sortColumn = queryToORM[sort.split('.')[0].toLowerCase() || 'price'];
        sortOrder = sort.split('.')[1].toLowerCase();
    }

    try {
        const assets = prisma.asset.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                        },
                    },
                    {
                        tags: {
                            contains: query,
                        },
                    },
                ],
            },
            skip: ITEMS_PER_PAGE * (currentPage - 1),
            take: ITEMS_PER_PAGE,
            orderBy: {
                [sortColumn]: sortOrder,
            },
        });
        return assets;
    }
    catch (error) {
        console.error('Database Error:', error);
        // close the database connection
        await prisma.$disconnect();
        throw new Error('Failed to fetch assets.');
    }
}

// fetch pages for assets
export async function fetchAssetPages(query: string) {
    noStore();
    // get the count of pages for assets
    try {
        const count = await prisma.asset.count({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                        },
                    },
                    {
                        tags: {
                            contains: query,
                        },
                    },
                ],
            },
        });

        const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        // close the database connection
        await prisma.$disconnect();
        throw new Error('Failed to fetch total number of assets.');
    }
}

// add an asset to favorites list for user
// export async function addAssetToFavorites(userId: string, assetId: string) {
//     try {
//         const data = await sql`INSERT INTO favorites (user_id, asset_id) VALUES (${userId}, ${assetId})`;
//         return data;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to add asset to favorites.');
//     }
// }
