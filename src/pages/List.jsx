import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router";

export default function List() {

    const users = useLoaderData()
    

    
    return (
        <ul>
            {
                users.map(user =>(
                <li key={user.id}>
                    <Link to={`/list/${user.id}`}>{user.name}</Link>
                </li>
                ))
            }

        </ul>
    )
}