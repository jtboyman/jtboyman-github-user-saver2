import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

//create component
const UserList = () => {
    //collection we are referencing
    const colRef = collection(db, 'users');

    //declare users array
    let users: { [field: string]: any }[] = [];

    //get collection data
    getDocs(colRef).then((snapshot) => {
        
        snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data() });
        })
        console.log(users);
        })
        .catch(err => {
            console.log(err.message);
        });

        return (
            <div>username: {users[0].name}</div>
        )
};

export default UserList;