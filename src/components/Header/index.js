import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
        <div className='bg-gray-200 p-4  shadow-md'>
            <div className='container mx-auto'>
                <Link href='/'>
                    <a><img className='mx-auto' src='/img/logo_palpitebox.png' alt='PalpiteBox' /></a>
                </Link>
            </div>
        </div>        
        </React.Fragment>
    )
}

export default Header