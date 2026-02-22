import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navigationData = [
        { "id": 101, "name": "Home", "path": "/home" },
        { "id": 102, "name": "About", "path": "/about-us" },
        { "id": 103, "name": "Contact", "path": "/contact" },
        { "id": 104, "name": "Products", "path": "/products" },
        { "id": 105, "name": "Blog", "path": "/blog/latest" }
    ]
    const links = navigationData.map(link => <Link key={link.id} link={link}></Link>)
    return (

        <nav className='flex justify-between mx-4 mt-3'>
            <span className='flex gap-1 cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <CircleX className='md:hidden' /> : <Menu className='md:hidden'></Menu>}

                <ul className='md:hidden'>
                    {
                        links
                    }
                </ul>

                <h1>My Navbar</h1>

            </span>
            <ul className='md:flex hidden gap-2'>
                {
                    links
                }
            </ul>

            {/* <ul className='flex justify-between'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">Success Stroy</a></li>
        </ul> */}
            {/* <ul className='flex gap-1'>
            {
                navigationData.map(link =><li><a href="">{link.name}</a></li>
)
            }
        </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;