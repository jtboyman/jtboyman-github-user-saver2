import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
//import mapAllUsers from "../../utils/user-builder"

//create component
const UserList = () => {

    const colRef = collection(db, 'users');

    const [users, setUsers] = useState<{ [field: string]: any }[]>([]);

    useEffect(() =>
        onSnapshot(colRef, (snapshot) =>
            setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
    );

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>username: {user.username}</p>
                    <p>name: {user.name}</p>
                    <p>public_repos: {user.public_repos}</p>
                    <p>public_gists: {user.public_gists}</p>
                    <p>followers: {user.followers}</p>
                    <p>following: {user.following}</p>
                    <p>created_at: {user.created_at}</p>
                </div>
            ))}
        </div>

    )
};

export default UserList;