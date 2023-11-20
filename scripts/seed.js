const { db } = require('@vercel/postgres');
const {
    receipts,
    assets,
    price_history,
    users,
} = require('../src/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
const { randomUUID } = require('crypto');

async function seedUsers(client) {
    // log the authorization status of the user on the client
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedReceipts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "receipts" table if it doesn't exist
        const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS receipts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    asset_id UUID NOT NULL,
    amount INT NOT NULL,
    price FLOAT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    sender UUID NOT NULL,
    receiver UUID NOT NULL);
`;
        console.log(`Created "receipts" table`);

        // Insert data into the "receipts" table
        const insertedReceipts = await Promise.all(
            receipts.map(
                (receipt) => client.sql`
        INSERT INTO receipts (id, asset_id, amount, price, status, date, sender, receiver)
        VALUES (${randomUUID()}, ${receipt.asset_id}, ${receipt.amount}, ${receipt.price}, ${receipt.status}, ${receipt.date}, ${receipt.sender}, ${receipt.receiver})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedReceipts.length} receipts`);

        return {
            createTable,
            receipts: insertedReceipts,
        };
    } catch (error) {
        console.error('Error seeding receipts:', error);
        throw error;
    }
}

async function seedAssets(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "assets" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS assets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL
      );
    `;

        console.log(`Created "assets" table`);

        // Insert data into the "assets" table
        const insertedAssets = await Promise.all(
            assets.map(
                (asset) => client.sql`
        INSERT INTO assets (id, name, tags, image_url, price)
        VALUES (${asset.id}, ${asset.name}, ${asset.tags}, ${asset.image_url}, ${asset.price})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedAssets.length} assets`);

        return {
            createTable,
            assets: insertedAssets,
        };
    } catch (error) {
        console.error('Error seeding assets:', error);
        throw error;
    }
}

async function seedPriceHistory(client) {
    try {
        // Create the "price_history" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS price_history (
        month VARCHAR(4) NOT NULL UNIQUE,
        price INT NOT NULL
      );
    `;

        console.log(`Created "price_history" table`);

        // Insert data into the "price_history" table
        const insertedPriceHistory = await Promise.all(
            price_history.map(
                (rev) => client.sql`
        INSERT INTO price_history (month, price)
        VALUES (${rev.month}, ${rev.price})
        ON CONFLICT (month) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedPriceHistory.length} price_history`);

        return {
            createTable,
            price_history: insertedPriceHistory,
        };
    } catch (error) {
        console.error('Error seeding price_history:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();
    // try creating a test table  
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS test (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        );
    `;
    await seedUsers(client);
    await seedAssets(client);
    await seedReceipts(client);
    await seedPriceHistory(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
