import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const addUser = (username: string | { username: string; }) => {

    //collection we are referencing
    const colRef = collection(db, 'users');

    //reference the form element
    const addUserForm = document.querySelector('.add-user-form') as HTMLFormElement;

    //add event listener so it adds user on submit
    addUserForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //make api call to github to get info we need
        username = addUserForm.username.value;

        fetch("https://api.github.com/users/" + username)
            .then((result) => result.json())
            .then((data) => {
                console.log(data);

                //add the info to the db
                addDoc(colRef, {
                    created_at: data.created_at,
                    followers: data.followers,
                    following: data.following,
                    name: data.name,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                    username: data.login
                })
                //reset form and let user know success or failure
                .then(() => {
                    addUserForm.reset();
                })
            })





    })

}



export default addUser;