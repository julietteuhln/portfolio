import React, { useState, useEffect } from 'react';

export default function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'pastel');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? 'sunset' : 'pastel';
    setTheme(newTheme);
  }

  return (
    <header>
      <div className='navbar mx-auto justify-between base-100 bg-neutral text-white'>
           <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
              tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href='/'>Accueil</a></li>
                <li>
                  <a>Projets</a>
                  <ul className="p-2">
                    <li><a href='/post/1'>Graphisme</a></li>
                    <li><a href='/post/2'>Design de site</a></li>
                    <li><a href='/post/3'>Animation courte</a></li>
                    <li><a href='/post/5'>Retouche photo</a></li>
                  </ul>
                </li>
                <li><a href='/about'>A propos & contact</a></li>
              </ul>
          </div>
          <a className="btn btn-ghost text-xl">Juliette</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 z-10 text-accent">
              <li><a href='/'>Accueil</a></li>
              <li>
                <details>
                  <summary>Projets</summary>
                  <ul className="p-2">
                    <li><a href='/post/1'>Graphisme</a></li>
                    <li><a href='/post/2'>Design de site</a></li>
                    <li><a href='/post/3'>Animation courte</a></li>
                    <li><a href='/post/5'>Retouche photo</a></li>
                  </ul>
                </details>
              </li>
              <li><a href='/about'>A propos & contact</a></li>
            </ul>
          </div>
          <div className='navbar-end'>
            <div className='btn btn-ghost btn-circle'>
              <label className='swap swap-rotate'>
                <input
                  type='checkbox'
                  className='theme-controller'
                  checked={theme === 'sunset'}
                  onChange={handleThemeChange}
                />
                <svg
                  className="swap-off size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path fillRule='evenodd' fill='currentColor' d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
                <svg
                  className="swap-on size-6"
                  xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24">
                 <path fillRule='evenodd' fill='currentColor' d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                
              </label>  
            </div>
          </div>    
       </div>
    </header>
  )
}