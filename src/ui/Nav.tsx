'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';
import LogInBtn from '@/ui/login/btn';
import Link from 'next/link';

// login or account takes in an object with a userStatus parameter that is a string, and returns a login button or an account button
export function LoginorAccount({ userStatus }: { userStatus: string }) {
    if (userStatus == 'logged out') {
        return <LogInBtn />
    }
    else if (userStatus == 'logging in') {
        return null
    }
    return (
        <div className="flex">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
            >
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@gmail.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => { console.log("log-out") }}>Sign out</Dropdown.Item>
            </Dropdown>
        </div>)
}

export default function Component() {
    const [userStatus, setUserStatus] = useState('logged out')

    // add its proper types
    let hm = {
        "/": "Home",
        "/about": "About",
        "/market": "Market",
        "/trade": "Trade",
    } as { [key: string]: string }

    let home = false
    const url = usePathname();

    // set home with url
    if (url == '/') {
        home = true
    }

    if (url == 'login') {
        setUserStatus('logging in')
    }

    return (
        <Navbar fluid className='bg-primary-eerie_black'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="data:image/jpeg;base64,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" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center text-primary-olivine whitespace-nowrap text-xl font-semibold dark:text-white">Sauna</span>
            </Navbar.Brand>
            <Navbar.Toggle className='ml-2 active:border-none hover:bg-primary-eerie_black' />
            <Navbar.Collapse >
                {
                    // iterate through the url hashmap and create a navbar item for each
                    // if the current url is home, don't add the home button
                    // if the current url is not home, add the home button
                    // the active button is the current url
                    Object.keys(hm).map((item, index) => {
                        if (home) {
                            if (index == 0) {
                                return ''
                            }
                        }

                        // only display trade if the user is logged in
                        return <Navbar.Link className={`md:pt-2 ${url == item ? 'text-primary-olivine' : 'text-primary-olivine-400'}`} href={item} key={index}>{hm[item]}</Navbar.Link>
                    })
                }
                <LoginorAccount userStatus={userStatus} />
            </Navbar.Collapse>
        </Navbar>
    );
}
