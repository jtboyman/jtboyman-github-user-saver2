import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

//this module is responsible for making the api call to github and adding a new user to firestore

const addUser = (username: string | { username: string; }) => {

    //collection we are referencing
    const colRef = collection(db, 'users');

    //reference the form element
    const addUserForm = document.querySelector('.add-user-form') as HTMLFormElement;

    //reference <p> where validation message will go
    const validationMessage = document.querySelector('.validation-message') as HTMLParagraphElement;

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
                //reset form and let user know success
                .then(() => {
                    addUserForm.reset();
                    validationMessage.innerHTML = 'User Successfully Added!';
                    validationMessage.style.color = "white";
                })
        })
        //on failure give failure message
        .catch((error) => {
            console.log(error.message)
            validationMessage.innerHTML = 'Uh-oh! Something went wrong... Please check your spelling, check your connection, or try again later!';
            validationMessage.style.color = "white";
        });

}



export default addUser;