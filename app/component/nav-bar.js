import Link from 'next/link'

const NavBar = () => {
    return ( 
        <div className="bg-blue-400 py-2 flex justify-between text-white">
            <ul className="flex ">
                <li className="px-2"><Link href='/'>Job Hunt</Link></li>
                <li className="px-2"><Link href='/about'>About</Link></li>
                <li className="px-2"><Link href='/contact'>Contact</Link></li>
            </ul>
            <div className="pr-2"><Link href='/login'>Login</Link></div>
        </div>
     );
}
 
export default NavBar;