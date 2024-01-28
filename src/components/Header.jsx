import React from 'react'
;
import CartIcon from './CartIcon';

const Header = ({cart}) => {
  return (
    <div className='flex justify-between items-center mb-5 bg-gradient-to-r from-green-400 to-green-800 ..."'>
        
        <h1 className='text-6xl font-semibold text-white'>Meram Belediye Atölyesi </h1>
        <img className='bg-white rounded' src="https://www.meram.bel.tr/assets/img/logo.svg" alt="" />
        <CartIcon cart={cart} />
        </div>
  )
}

export default Header