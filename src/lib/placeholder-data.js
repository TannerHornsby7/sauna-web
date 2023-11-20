// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User 1',
        email: 'user1@gmail.com',
        password: '123456',
    },

    {
        id: '410544b2-4001-4271-9855-fec4b6a6442b',
        name: 'User 2',
        email: 'user2@gmail.com',
        password: '123456',
    },
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442c',
        name: 'User 3',
        email: 'user3@gmail.com',
        password: '123456',
    },
];

const assets = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Dreams & Nightmares Case',
        tags: 'csgo|case|container',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        name: 'Chroma 2 Case',
        tags: 'csgo|case|container',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFAuhqSaKWtEu43mxtbbk6b1a77Twm4Iu8Yl3bCU9Imii1Xt80M5MmD7JZjVLFH-6VnQJQ/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
    {
        id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        name: 'Mann Co. Supply Crate Key',
        tags: 'tf2|key',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZULUrsm1j-9xgEAaR4uURrwvz0N252yVaDVWrRTno9m4ccG2GNqxlQoZrC2aG9hcVGUWflbX_drrVu5UGki5sAij6tOtQ/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
    {
        id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        name: 'Gamma 2 Case',
        tags: 'csgo|case|container',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVFx5KAVo5PSkKV4xhfGfKTgVvIXlxNPSwaOmMLiGwzgJvJMniO-Zoo_z2wXg-EVvfSmtc78HsNoy/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
    {
        id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
        name: 'Revolution Case',
        tags: 'csgo|case|container',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        name: 'Chroma 3 Case',
        tags: 'csgo|case|container',
        image_url: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYynaSdJGhE74y0wNWIw_OlNuvXkDpSuZQmi--SrN-h3gey-Uo6YWmlIoCLMlhplhFFvwI/360fx360f',
        // make the price a random formatted string
        price: 29.00
    },
];

const receipts = [
    {
        asset_id: assets[0].id,
        amount: 15795,
        price: 29.00,
        status: 'pending',
        date: '2022-12-06',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b',

    },
    {// make random uuid
        asset_id: assets[1].id,
        amount: 20348,
        price: 29.00,
        status: 'pending',
        date: '2022-11-14',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[5].id,
        amount: 3040,
        price: 29.00,
        status: 'complete',
        date: '2022-10-29',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[2].id,
        amount: 44800,
        price: 29.00,
        status: 'complete',
        date: '2023-09-10',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[5].id,
        amount: 34577,
        price: 29.00,
        status: 'pending',
        date: '2023-08-05',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[3].id,
        amount: 54246,
        price: 29.00,
        status: 'pending',
        date: '2023-07-16',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[5].id,
        amount: 666,
        price: 29.00,
        status: 'pending',
        date: '2023-06-27',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[3].id,
        amount: 32545,
        price: 29.00,
        status: 'complete',
        date: '2023-06-09',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[4].id,
        amount: 1250,
        price: 29.00,
        status: 'complete',
        date: '2023-06-17',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[5].id,
        amount: 8546,
        price: 29.00,
        status: 'complete',
        date: '2023-06-07',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[1].id,
        amount: 500,
        price: 29.00,
        status: 'complete',
        date: '2023-08-19',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[5].id,
        amount: 8945,
        price: 29.00,
        status: 'complete',
        date: '2023-06-03',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[2].id,
        amount: 8945,
        price: 29.00,
        status: 'complete',
        date: '2023-06-18',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[0].id,
        amount: 8945,
        price: 29.00,
        status: 'complete',
        date: '2023-10-04',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
    {
        asset_id: assets[2].id,
        amount: 1000,
        price: 29.00,
        status: 'complete',
        date: '2022-06-05',
        sender: '410544b2-4001-4271-9855-fec4b6a6442a',
        receiver: '410544b2-4001-4271-9855-fec4b6a6442b'  

    },
];

const price_history = [
    { month: 'Jan', price: 2000 },
    { month: 'Feb', price: 1800 },
    { month: 'Mar', price: 2200 },
    { month: 'Apr', price: 2500 },
    { month: 'May', price: 2300 },
    { month: 'Jun', price: 3200 },
    { month: 'Jul', price: 3500 },
    { month: 'Aug', price: 3700 },
    { month: 'Sep', price: 2500 },
    { month: 'Oct', price: 2800 },
    { month: 'Nov', price: 3000 },
    { month: 'Dec', price: 4800 },
];

module.exports = {
    users,
    assets,
    receipts,
    price_history,
};
