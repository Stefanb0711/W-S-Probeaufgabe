import React, { useState } from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const onLogoutClick = () => {
        // Logout Funktionalität hier einfügen
        console.log('Logout geklickt');
    };

    const onShoppingCartClick = () => {
        // Warenkorb-Click Funktionalität hier einfügen
        console.log('Warenkorb geklickt');
    };

    const onLoginClick = () => {
        // Login-Click Funktionalität hier einfügen
        console.log('Login geklickt');
    };

    const onRegisterClick = () => {
        // Register-Click Funktionalität hier einfügen
        console.log('Register geklickt');
    };



    return (
        <div className="bg-gray-800 p-4 flex flex-col md:flex-row justify-between items-center relative">
            <div className="text-white text-lg mb-2 md:mb-0">
                <h1>Website Name</h1>
            </div>

            {/* Toggle Button (nur für Mobile sichtbar) */}
            <button
                className="md:hidden block absolute top-4 right-4"
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Navigation */}
                <nav className="md:flex md:items-center md:space-x-4 mt-4 md:mt-0 md:flex-row space-y-2 md:space-y-0">

                </nav>

        </div>
    );
};

export default NavigationBar;