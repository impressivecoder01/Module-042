import React from 'react';
import Link from './Link';

const Navbar = () => {
    const navigationData = [
  { "id": 101, "name": "Home", "path": "/home" },
  { "id": 102, "name": "About", "path": "/about-us" },
  { "id": 103, "name": "Contact", "path": "/contact" },
  { "id": 104, "name": "Products", "path": "/products" },
  { "id": 105, "name": "Blog", "path": "/blog/latest" }
]
    return (
       <nav className='flex gap-1'>
        {
            navigationData.map(link => <Link key={link.id} link={link}></Link>)
        }
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
       </nav>
    );
};

export default Navbar;