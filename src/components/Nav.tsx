
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';

export default function Component() {
    const [userStatus, setUserStatus] = useState('logged out')
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    const login = () => {
        setOpenModal(false)
        setUserStatus('logged in')
        console.log('login')
    }

    const signup = () => {
        setUserStatus('logged in')
        console.log('signup')
    }

    const logout = () => {
        setUserStatus('logged out')
        console.log('logout')
    }

    // setup
    const url = usePathname();
    console.log(url)
    let home = false
    if (url == '/') {
        home = true
    }

    let hm = {
        "/": "Home",
        "/about": "About",
        "/market": "Market",
        "/trade": "Trade",
    }

    return (
        <Navbar fluid className='bg-primary-eerie_black'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="data:image/jpeg;base64,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" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center text-primary-olivine whitespace-nowrap text-xl font-semibold dark:text-white">Sauna</span>
            </Navbar.Brand>
            {
                // if the user is logged in, show the user avatar
                // if the user is not logged in, show the login/signup button
                userStatus == 'logged in' ?
                    <div className="flex md:order-2">
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
                            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle className='ml-2 active:border-none  hover:bg-primary-eerie_black' />
                    </div>
                    :
                    <div className="flex md:order-2">
                        <button type="button" onClick={()=>{setOpenModal(true)}} className="mr-2 text-gray-900 bg-gradient-to-r from-primary-ebony to-primary-olivine hover:bg-gradient-to-l hover:from-primary-ebony hover:to-primary-olivine focus:ring-4 focus:outline-none focus:ring-primary-olivine dark:focus:ring-primary-ebony-100 font-medium rounded-md px-5 py-2 text-center">Log In</button>
                            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Sauna</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Your email" />
                                            </div>
                                            <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="password" value="Your password" />
                                            </div>
                                            <TextInput id="password" type="password" required />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-2">
                                                <Checkbox id="remember" />
                                                <Label htmlFor="remember">Remember me</Label>
                                            </div>
                                            <a href="#" className="text-sm text-primary-olivine-300 hover:underline dark:text-primary-olivine-300">
                                                Lost Password?
                                            </a>
                                        </div>
                                        <div className="w-full">
                                            <button className='rounded-md px-5 py-2 text-white hover:text-black hover:bg-white border-primary-olivine border bg-primary-olivine border-primary-olivine-100  hover:text-primary-eerie_black' onClick={login}>Log in to your account</button>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-center space-x-2">
                                                <span className="h-px bg-gray-400 w-14" />
                                                <span className="text-sm text-gray-500">or</span>
                                                <span className="h-px bg-gray-400 w-14" />
                                            </div>
                                            {/* // add login with steam button that is sylized with flowbite */}
                                            <div className="w-full grid gap-3 p-4">
                                                <button className='rounded-md px-5 py-2 text-white hover:text-black hover:bg-white border-primary-olivine border bg-primary-olivine border-primary-olivine-100  hover:text-primary-eerie_black' onClick={signup}>
                                                {/* <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-16 w-8 csm_ui__size_16__2e8eb" aria-label="social steam"><path d="M17.548 7.942c-.049.687-.694 1.434-1.57 1.374-.687-.047-1.391-.712-1.325-1.57.049-.639.645-1.385 1.521-1.326.876.06 1.424.835 1.374 1.522zm-1.521 2.797l-2.602 1.914c0 .147-.032.324-.049.393-.351 1.422-1.374 1.767-2.012 1.767-1.08-.05-1.816-.639-2.11-1.668L4.51 11.184c-.394.253-.89.355-1.397.32-.964-.066-1.985-.973-1.839-2.354.106-1.004 1.063-1.866 2.124-1.794 1.06.073 1.764.794 1.927 1.61l4.812 1.97c.393-.245.638-.343 1.227-.343l1.867-2.7c.001-.041-.005-.212 0-.292.106-1.54 1.47-2.702 3.048-2.594a2.871 2.871 0 012.693 2.984c-.05 1.62-1.424 2.798-2.945 2.748zM4.767 8.733c-.236-.487-.676-.854-1.37-.9-.657-.046-1.522.43-1.642 1.317a1.628 1.628 0 001.358 1.838c.159.026.48.035.838-.06l-1.182-.49c-.473-.24-.611-.802-.344-1.471.361-.563.92-.91 1.807-.45l.534.216zm9.444-1.028c-.081 1.197.811 1.991 1.718 2.053.883.06 2.029-.57 2.11-1.767.05-.932-.59-1.978-1.816-2.061-1.276-.05-2.012.981-2.012 1.775zM12.886 12.9c.134-.98-.718-1.816-1.522-1.816-.13-.01-.441 0-.638.098l1.151.458c.578.355.714 1.112.393 1.66a1.248 1.248 0 01-1.7.378l-.727-.288c.294.59 1.008.933 1.521.933.513 0 1.371-.327 1.522-1.423z"></path></svg> */}
                                                    Sign In with Steam
                                                </button>
                                                <button className='rounded-md px-5 py-2 text-white hover:text-black hover:bg-white border-primary-olivine border bg-primary-olivine border-primary-olivine-100  hover:text-primary-eerie_black' onClick={signup}>Sign In with Twitch</button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-sm font-medium text-primary-eerie_black dark:text-gray-300">
                                            Not registered?&nbsp;
                                            <a href="#" className="text-primary-olivine-300 hover:underline dark:text-primary-olivine-300">
                                                Create account
                                            </a>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        <Navbar.Toggle className='ml-2 active:border-none  hover:bg-primary-eerie_black' />
                    </div>
            }
            <Navbar.Collapse>
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
                        if (item == '/trade' && userStatus == 'logged out') {
                            return ''
                        }
                        return <Navbar.Link className={`${url == item ? 'text-primary-olivine' : 'text-primary-olivine-400'}`} href={item} key={index}>{hm[item]}</Navbar.Link>
                    })
                }
            </Navbar.Collapse>
        </Navbar>
    );
}
