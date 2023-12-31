export default function Component() {
    return (<div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-16 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-primary-olivine-600">Steam Transactions every 24 hours</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary-olivine-900 sm:text-5xl">500,000</dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-primary-olivine-600">Assets under holding</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary-olivine-900 sm:text-5xl">$3.2 billion</dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-primary-olivine-600">New users annually</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-primary-olivine-900 sm:text-5xl">46,000</dd>
                </div>
            </dl>
        </div>
    </div>
    )
}