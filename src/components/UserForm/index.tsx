import addUser from "../../services/add-user"
import { useForm, SubmitHandler } from "react-hook-form";

const UserForm = () => {

    interface IFormInput {
        username: string;
    }

    //set up submit handler to receive input
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = username => addUser(username);

    return (
        <div className="user-form-container">
            <form className="add-user-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username: </label>
                <input type="text" required placeholder="e.g. jtboyman" {...register("username")} name="username"/>

                <input className="add-user-button" type="submit" value="Add User"/>
            </form>
            <p className="validation-message"></p>
        </div>
    )
}

export default UserForm;