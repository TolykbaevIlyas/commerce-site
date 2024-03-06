'use client'

import { useState } from 'react'
import logo from '../assets/img/Logo.svg'
import user from '../assets/img/User.svg'
import search from '../assets/img/Search.svg'
import favourite from '../assets/img/Favourite.svg'
import cart from '../assets/img/Cart.svg'
import s from '../assets/styles/style.module.css'
import { Button } from '../../../shared/ui/Button'
import { ShoppingModal } from '../../../features/ShoppingModal'
import { AuthModal } from '../../../features/AuthModal'


const Header = () => {

    const [click, setClick] = useState(false);
    const [LoginClick, setLoginClick] = useState(false);

  return (
    <header className='flex justify-between items-center text-center py-5 bg-white shadow-xl px-20'>
        <div>
            <a href={'/'}><img src={logo} alt={'logo'}/></a>
        </div>
        <nav className='flex gap-10'>
            <a href={'/'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Home</a>
            <a href={'/Shop'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Shop</a>
            <a href={'/About'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>About</a>
            <a href={'/Contact'} className={`font-semibold hover:font-bold duration-150 ${s.NavText}`}>Contact</a>
        </nav>
        <div className='flex gap-10'>
            <Button variant='2' onClick={()=> setLoginClick(!LoginClick)}>
                <img src={user} alt={'Profile'} width={25}/>
            </Button>
            <Button variant='2'>
                <img src={search} alt={'Search'} width={25}/>
            </Button>
            <Button variant='2'>
                <img src={favourite} alt={'Favourite'} width={25}/>
            </Button>
            <Button variant='2' onClick={()=> setClick(!click)}>
                <img src={cart} alt={'Cart'} width={25}/>
            </Button>
        </div>
        {click ? <ShoppingModal click={click} setClick={setClick} /> : null}
        {LoginClick ? <AuthModal click={LoginClick} setClick={setLoginClick}/> : null}
    </header>
  )
}

export default Header