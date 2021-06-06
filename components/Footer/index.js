import React from 'react'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-500 p-4 my-96 absolute w-full'>
                <div className='container mx-auto text-center font-bold text-white'>                    
                    Projeto desenvolvido por: Diego Pereira / 
                    <a className='link hover:underline' href='https://linkedin.com/in/diegopereirati' target='_blank'>Linkedin</a> / 
                    <a className='hover:underline' href='https://github.com/dhiegopereira' target='blank'>Github</a>                
                </div>
                <div className='container mx-auto'>
                    <img className='mx-auto' src='/img/logo_scio.png' alt='PalpiteBox' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer