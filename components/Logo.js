import React from 'react';
import Image from 'next/image';

import logo from '../src/logo.svg'

const Logo = () => {
    return (
        <div className="flex items-center">
        <Image
            src={logo}
            alt="logo web"
            width={60}
            height={60}
        />
        <div className="text-4xl text-neutral-900 tracking-wide ml-2 font-semibold">GPS Tracker</div>
    </div>
    );
}

export default Logo;
