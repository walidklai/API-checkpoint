import React  from 'react'

const UserList = (props) => {
    return (
        <div className='singleUser'>
            <h1 style={{
                textDecoration:'underline'
            }}>{props.username}</h1>
            <h5>({props.name})</h5>
            <h4>Email : {props.email}</h4>
            <h4>Phone : {props.phone}</h4>
        </div>
    )
}

export default UserList
