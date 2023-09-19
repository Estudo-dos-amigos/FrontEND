import React from 'react';
import Logo from "../assets/primos.png"

export function Header() {
    return (
        <div className='logoprimos'>
            <img src={Logo} alt="Logo dos primos." />
        </div>
    )
}