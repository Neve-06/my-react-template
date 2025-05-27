import { useEffect, useState } from "react"
import { Link } from "react-router";

export default function List() {

    const [users, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(result => setUser(result))
        .finally(() => setIsLoading(false))
    }, []);

    if(isLoading){
        return(<p>Loading...</p>)
    }
    return isLoading ? ( <p>Loading...</p>) : (
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