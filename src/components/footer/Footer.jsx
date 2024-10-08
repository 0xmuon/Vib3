import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import './Footer.css';

function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <footer className="body-font" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#000000' }}>
            {/* Left Content  */}
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                {/* Blog Logo  */}
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    {/* logo  */}
                    <img className='w-10'
                        src="https://gcdnb.pbrd.co/images/VHJfkiB8UqNF.png?o=1" alt="logo"
                    />
                    {/* logo text  */}
                    <span className="test-yellow">
                        Vib3
                    </span>
                </div>

                {/* items  */}
                <p className="text-yellow justify-center">
                    © 2024 MUON & Co. —
                    <a
                        href="https://twitter.com/0xmuon"
                        className="text-gray-600 ml-1"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @0xmuon
                    </a>
                </p>
                
                {/* Right item  */}
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    {/* Icon 1  */}
                    <a href="https://x.com/0xmuon" className="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>

                    {/* Icon 2 */}
                    <a href="https://www.linkedin.com/in/rudraksh-j/" className="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={0}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            />
                            <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>

    )
}

export default Footer