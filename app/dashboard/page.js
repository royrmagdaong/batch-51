'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../component/nav-bar'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const [users, setUsers] = useState([])
    const [curUser, setCurUser] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('currentUser'))){
            setCurUser(true)
        }

        axios.get('./users.json')
        .then(async (response) => {
            // handle success
            console.log('users', response.data)
            setUsers(response.data?.users)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

        if(localStorage.getItem('currentUser') === null){
            router.push('/')
        }
        
    }, [])

     
    return ( 
        <>
        {
            curUser &&
            <div>
                <NavBar></NavBar>
                <ul>
                    {
                        users.map((user)=>(
                            <li key={user.id}>{user.email}</li>
                        ))
                    }
                </ul>
            </div>
        }
            
        </>
     );
}
 
export default Dashboard;