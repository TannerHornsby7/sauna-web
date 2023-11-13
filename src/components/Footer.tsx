'use client'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Component() {
    return (
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-4 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title title="Sauna" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">News</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Discord Server</Footer.Link>
                            <Footer.Link href="#">Twitter</Footer.Link>
                            <Footer.Link href="#">Facebook</Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">Privacy Policy</Footer.Link>
                            <Footer.Link href="#">Licensing</Footer.Link>
                            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#">iOS</Footer.Link>
                            <Footer.Link href="#">Android</Footer.Link>
                            <Footer.Link href="#">Windows</Footer.Link>
                            <Footer.Link href="#">MacOS</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6">
                    <Footer.Copyright href="#" by="Sauna™" year={2023} className="justify-center" />
                    <div className="mt-4 flex gap-4 first:pl-6 last:pr-6 sm:mt-0 justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}