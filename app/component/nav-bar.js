'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState('')
    
    const router = useRouter()
    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        setCurrentUser(user)
        console.log('user', user)
    },[])

    const handleLogout = () => {
        localStorage.removeItem('currentUser')
        console.log('Logout')
        router.push('/login')
    }

    return ( 
        <div className="bg-blue-400 py-2 flex justify-between text-white">
            <ul className="flex ">
                <li className="px-2"><Link href='/'>Job Hunt</Link></li>
                <li className="px-2"><Link href='/about'>About</Link></li>
                <li className="px-2"><Link href='/contact'>Contact</Link></li>
                {
                    currentUser?.role === 'admin' &&
                    <div className="pr-2"><Link href='/dashboard'>Dashboard</Link></div>
                }
            </ul>
            {/* <div className="pr-2"><Link href='/login'>Login</Link></div> */}
            {
                !currentUser &&
                <div className="pr-2"><Link href='/login'>Login</Link></div>
            }
            {
                currentUser &&
                <div className="pr-2 cursor-pointer hover:text-blue-300" onClick={handleLogout}>Logout</div>
            }
            
        </div>
     );
}
 
export default NavBar;