import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import mapAllUsers from "../../utils/user-builder"

//create component
const UserList = () => {
    
    const colRef = collection(db, 'users');

    const [users, setUsers] = useState<{[field: string]: any}[]>([]);

    useEffect(() =>
        onSnapshot(colRef, (snapshot) =>
            setUsers(snapshot.docs.map((doc) => doc.data()))
        ),
        []
    );


    //not returning what we want :(
    return (
            <div>
                {mapAllUsers(users)}
            </div>

    )
};

export default UserList;