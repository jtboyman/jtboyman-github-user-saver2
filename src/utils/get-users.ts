import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

const getUsers = () => {
    //collection we are referencing
    const colRef = collection(db, 'users');

    const [users, setUsers] = useState<{[field: string]: any}[]>([]);

    useEffect(() =>
        onSnapshot(colRef, (snapshot) =>
            setUsers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        ),
        []
    );






    /*//collect data in real time from collection
    onSnapshot(colRef, (snapshot) => {
        //declare users array
        let users: { [field: string]: any }[] = [];
        //set up subscription to catch changes 
        snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })
        })

        console.log(users);
        //mapping function needs to go here so it happens after this i think
        //mapAllUsers(users); 
    })*/
}

export default getUsers;