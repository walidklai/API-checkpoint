import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserList from './UserList'

const App = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    useEffect(() => {
        console.log('its working')
        const fetchData = async () => {
            const fetched = await axios.get('https://jsonplaceholder.typicode.com/users')
            setListOfUsers(fetched.data)
            console.log(fetched.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {listOfUsers.map(el => <UserList key={el.id} {...el} />)}
        </div>
    )
}

export default App
