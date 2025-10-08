import React from 'react';
import logoImg from '../../assets/logo.png'
import gitImg from '../../assets/github.png'
const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
      </ul>
    </div>
    <img src={logoImg}alt="logo"className='w-6 h-6 ml-16'/><span><a className="btn btn-ghost text-xl m-0 p-1 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a></span>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" gap-3 font-semibold text-xl menu menu-horizontal px-1">
      <li>
    <a
  className="relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
             after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"
>
  Home
</a>

        </li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a className="btn mr-16 p-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"><img src={gitImg} alt="github" /><span className='text-white text-xl font-bold'>Contribute</span></a>
  </div>
</div>
    );
};

export default Navbar;