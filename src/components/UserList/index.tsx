import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import formatDate from "../../utils/dateFormat"

//create component
const UserList = () => {

    //reference the collection
    const colRef = collection(db, 'users');

    //set up use state to assign data
    const [users, setUsers] = useState<{ [field: string]: any }[]>([]);

    useEffect(() =>
    //collect data and update in real time
        onSnapshot(colRef, (snapshot) =>
            setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
    );

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Public Repositories</th>
                        <th>Public Gists</th>
                        <th>Followers</th>
                        <th>Following</th>
                        <th>Date Created</th>
                    </tr>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td><a href={`https://github.com/${user.username}`} target="_blank">{user.username}</a></td>
                            <td>{user.name}</td>
                            <td>{user.public_repos}</td>
                            <td>{user.public_gists}</td>
                            <td>{user.followers}</td>
                            <td>{user.following}</td>
                            <td>{formatDate(user.created_at)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
};

export default UserList;