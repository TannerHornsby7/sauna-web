'use client'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import link_map from '@/lib/link_map';

// create a link map for the footer
// the link map is a map of the links in the footer
// the key is the name of the link
// the value is the link


export default function Component() {
    return (
        <Footer bgDark className='bg-primary-eerie_black-400'>
            <div className="w-full place-content-center">
                <div className="grid w-full grid-cols-3 gap-8 px-6 py-8 justify-items-center align-top">
                    <div>
                        <Footer.Title title="Sauna" />
                        <Footer.LinkGroup col>
                            <Link href={link_map['About']}>About</Link>
                            <Footer.Link href={link_map['News']}>News</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href={link_map['Discord Server']}>Discord Server</Footer.Link>
                            <Footer.Link href={link_map['Twitter']}>Twitter</Footer.Link>
                            <Footer.Link href={link_map['Facebook']}>Facebook</Footer.Link>
                            <Footer.Link href={link_map['Contact Us']}>Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href={link_map['Privacy Policy']}>Privacy Policy</Footer.Link>
                            <Footer.Link href={link_map['Licensing']}>Licensing</Footer.Link>
                            <Footer.Link href={link_map['Terms & Conditions']}>Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    {/* <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href={link_map['iOS']}>iOS</Footer.Link>
                            <Footer.Link href={link_map['Android']}>Android</Footer.Link>
                            <Footer.Link href={link_map['Windows']}>Windows</Footer.Link>
                            <Footer.Link href={link_map['MacOS']}>MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div> */}
                </div>
                <div className="w-full flex justify-center bg-primary-eerie_black-300 px-4 py-6">
                    <div className='grid grid-rows-2 place-items-center'>
                        <Footer.Copyright href='/' by="Sauna™" year={2023} />
                        <div className="pl-5 mt-1 flex gap-4 first:pl-6 last:pr-6 md:mt-2">
                            <Footer.Icon href={link_map['Facebook']} icon={BsFacebook} />
                            <Footer.Icon href={link_map['Instagram']} icon={BsInstagram} />
                            <Footer.Icon href={link_map['Twitter']} icon={BsTwitter} />
                            <Footer.Icon href={link_map['Github']} icon={BsGithub} />
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
}