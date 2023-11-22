const Chance = require('chance')
const bcrypt = require('bcrypt')
// library for getting the current day
const NUM_USERS = 10
const NUM_TRANSACTIONS = 100
// eventually we will import this from another file
const cs_assets = [{"name": "Revolution Case", "avg_price": 0.76, "avg_vol": "2722", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQynaHMJT9B74-ywtjYxfOmMe_Vx28AucQj3brAoYrz3Fay_kY4MG_wdYeLMlhpLMaM-1U/360fx360f"}, {"name": "Recoil Case", "avg_price": 0.329, "avg_vol": "2884", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQxnaecIT8Wv9rilYTYkfTyNuiFwmhUvpZz3-2Z9oqg0Vew80NvZzuiJdeLMlhpwFO-XdA/360fx360f"}, {"name": "Dreams & Nightmares Case", "avg_price": 1.18, "avg_vol": "3728", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQwnfCcJmxDv9rhwIHZwqP3a-uGwz9Xv8F0j-qQrI3xiVLkrxVuZW-mJoWLMlhpWhFkc9M/360fx360f"}, {"name": "Snakebite Case", "avg_price": 0.296, "avg_vol": "6381", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU4naLOJzgUuYqyzIaIxa6jMOLXxGkHvcMjibmU99Sg3Qaw-hA_ZWrzLISLMlhpgJJUhGE/360fx360f"}, {"name": "Fracture Case", "avg_price": 0.533, "avg_vol": "4176", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU2nfGaJG0btN2wwYHfxa-hY-uFxj4Dv50nj7uXpI7w3AewrhBpMWH6d9CLMlhpEbAe-Zk/360fx360f"}, {"name": "Clutch Case", "avg_price": 0.65, "avg_vol": "2189", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY5naqQIz4R7Yjix9bZkvKiZrmAzzlTu5AoibiT8d_x21Wy8hY_MWz1doSLMlhpM3FKbNs/360fx360f"}, {"name": "Prisma 2 Case", "avg_price": 0.83, "avg_vol": "929", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU1nfbOIj8W7oWzkYLdlPOsMOmIk2kGscAj2erE99Sn2AGw_0M4NW2hIYOLMlhpcmY0CRM/360fx360f"}, {"name": "CS20 Case", "avg_price": 0.76, "avg_vol": "111", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFU0naHKIj9D7oTgl4LelaGnMuqIwDgFusR337HCpYmhiwzm8ktqMjv2INKLMlhprbp6CTE/360fx360f"}, {"name": "Prisma Case", "avg_price": 0.78, "avg_vol": "527", "src_img": "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUynfWaI25G6Ijkl9iPw_SnNrjXw2oBu8cj3b2Qo4_33QbnrUdlYD37ddCLMlhpvs0XIz0/360fx360f"}];

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var chance = new Chance()

async function seedTransactions() {
    return 'hello'
}

async function seedAssets() {
    // use the cs_assets.json file to seed the database
    let assets = []
    for (let i = 0; i < cs_assets.length; i++) {
        let asset = cs_assets[i]
        assets.push({
            name: asset.name,
            tags: chance.pickset(['popular', 'rare', 'new'], 1)[0],
            desc: chance.sentence(),
            image: asset.src_img,
            steam_id: chance.integer({ min: 10**4, max: 10**5 }).toString(),
            avg_price: asset.avg_price,
            avg_vol: Number(asset.avg_vol),
            fungible: asset.name.includes('Case') ? true : false,
            book_id: chance.integer({ min: 1, max: 10**9 }),
        })
    }
    return prisma.asset.createMany({
        data: assets,
    })
}

async function seedUsers() {
    const users = []
    const password = await bcrypt.hash('password', 10)
    for (let i = 0; i < NUM_USERS; i++) {
        users.push({
            email: chance.email(),
            name: chance.name(),
            phash: password,
            createdAt: new Date(),
            profpic: 'https://i.imgur.com/4M34hi2.png',
            trade_url: chance.url(),
        })
    }
    return prisma.user.createMany({
        data: users,
    })
}

async function seedTransactions() {
    const transactions = []
    for (let i = 0; i < NUM_TRANSACTIONS; i++) {
        transactions.push({
            price: chance.floating({ min: 0, max: 3, fixed: 2 }),
            amount: chance.integer({ min: 1, max: 1000 }),
            asset_id: chance.integer({ min: 1, max: 10 }).toString(),
            seller_id: chance.integer({ min: 1, max: NUM_USERS }).toString(),
            buyer_id: chance.integer({ min: 1, max: NUM_USERS }).toString(),
            status: chance.pickone(['pending', 'completed']),
            createdAt: new Date(),
        })
    }
    return prisma.transaction.createMany({
        data: transactions,
    })
}

async function main() {
  const response = await seedUsers()
  const response2 = await seedTransactions()
  const response3 = await seedAssets()
  console.log(response, response2, response3)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })