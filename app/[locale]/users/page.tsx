import Link from 'next/link'
import React from 'react'

interface User{
    id:number,
    name:string,
    website:string
}
const  UserPage = async() => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    const user: User[] = await res.json()

  return (
    <div>
        <h1>User</h1>
      {user.map(user =>(
        <li key={user.id}>{user.name} <br /> <Link href= {user.website}>{user.website}</Link></li>
      ))}
    </div>
  )
}

export default UserPage
