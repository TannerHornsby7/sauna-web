'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
// import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className='mb-3 text-2xl'>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state === 'CredentialsSignin' && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Invalid credentials</p>
            </>
          )}
        </div>
        <div className="flex justify-between">
          {/* <div className="flex items-center gap-2">
                                                <Checkbox id="remember" />
                                                <Label htmlFor="remember">Remember me</Label>
                                            </div> */}
          <a href="#" className="text-sm text-primary-olivine-300 hover:underline dark:text-primary-olivine-300">
            Lost Password?
          </a>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px bg-gray-400 w-14" />
            <span className="text-sm text-gray-500">or</span>
            <span className="h-px bg-gray-400 w-14" />
          </div>
          {/* // add login with steam button that is sylized with flowbite */}
          <div className="w-full grid gap-3 p-4">
            <button className='rounded-md px-5 py-2 text-white hover:bg-white border-primary-olivine border bg-primary-olivine  hover:text-primary-eerie_black' onClick={()=>{console.log("signing in with steam")}}>Sign In with Steam</button>
            <button className='rounded-md px-5 py-2 text-white hover:bg-white border-primary-olivine border bg-primary-olivine  hover:text-primary-eerie_black' onClick={()=>{console.log("signing in with twitch")}}>Sign In with Twitch</button>
          </div>
        </div>
        <div className="flex justify-between text-sm font-medium text-primary-eerie_black dark:text-gray-300">
          Not registered?&nbsp;
          <a href="#" className="text-primary-olivine-300 hover:underline dark:text-primary-olivine-300">
            Create account
          </a>
        </div>
      </div>
    </form >
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button className="mt-4 w-full rounded-md px-5 py-2 text-white hover:bg-white border-primary-olivine border bg-primary-olivine  hover:text-primary-eerie_black" aria-disabled={pending}>
      Log in
    </button>
  );
}