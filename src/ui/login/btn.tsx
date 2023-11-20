import Link from 'next/link'

export default function SignInBtn() {
    return (
        <Link className="w-full mr-2 text-gray-900 bg-gradient-to-r from-primary-ebony to-primary-olivine hover:bg-gradient-to-l hover:from-primary-ebony hover:to-primary-olivine focus:ring-4 focus:outline-none focus:ring-primary-olivine dark:focus:ring-primary-ebony-100 font-medium rounded-md px-5 py-2" href="/login">
        Sign In
        </Link>
    )
}