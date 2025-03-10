import React, { useState } from 'react';
import Link from 'next/link';

const NavigationBar = () => {



    return (
        <div className=" p-4 flex flex-col md:flex-row justify-between items-center relative w-full
        h-[80px] ">
            {/* Bild in der linken oberen Ecke */}
            <img
                width={200}
                src="w&sLogo.svg"
                alt="Logo"
                className="absolute top-4 left-4"
            />

            {/* Titel mit Abstand vom linken Bereich */}

        </div>
    );
};

export default NavigationBar;