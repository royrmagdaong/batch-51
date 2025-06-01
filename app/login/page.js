'use client'

import NavBar from "../component/nav-bar";
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [curUser, setCurUser] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
        console.log('email', email)
        console.log('password', password)

        axios.get('./users.json')
        .then(async (response) => {
            // handle success
            console.log('users', response.data)
            
            const loginUser = response.data?.users?.filter((user)=>{
                return user.email === email && user.password === password
            })

            console.log('Logged in user: ', loginUser[0])

            localStorage.setItem('currentUser', JSON.stringify({email: loginUser[0].email, role: loginUser[0].role}))
            // console.log('current User: ', localStorage.)

            router.push('/')
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            setCurUser(true)
            router.push('/')
        }
    }, [])
    
    if(curUser){
        return <></>
        
    }else{
        
        return ( 
            <div>
                <NavBar/>
                <div className="flex justify-center h-screen items-center">
                    <div className=" h-1/2 flex justify-between">
                        <div className="">
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                                </div>
                                <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                    Sign In
                                </button>
                                {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Forgot Password?
                                </a> */}
                                </div>
                            </form>
                            <p className="text-center text-gray-500 text-xs">
                                &copy;2020 Acme Corp. All rights reserved.
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }

    
}
 
export default Login;