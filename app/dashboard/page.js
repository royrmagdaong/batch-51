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

        let token = JSON.parse(localStorage.getItem('currentUser'))

        console.log('token', token.token)

        const config = {
            headers: { Authorization: `Bearer ${token.token}` }
        };


        axios.get('http://localhost:5000/api/user/get-users',  config, {}).then(res=>{
            console.log('res', res)
            setUsers(res.data.users)
        }).catch(err=>{
            console.log('error', err)
        })

        // axios.get('./users.json')
        // .then(async (response) => {
        //     // handle success
        //     // console.log('users', response.data)
        //     setUsers(response.data?.users)
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })

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
                            <li key={user._id}>{user.email}</li>
                        ))
                    }
                </ul>
            </div>
        }
            
        </>
     );
}
 
export default Dashboard;