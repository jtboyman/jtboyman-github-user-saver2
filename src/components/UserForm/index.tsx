import addUser from "../../utils/add-user"
import { useForm, SubmitHandler } from "react-hook-form";

const UserForm = () => {

    interface IFormInput {
        username: string;
    }

    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = username => addUser(username);

    return (
        <div>
            <form className="add-user-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username: </label>
                <input type="text" required placeholder="Example: jtboyman" {...register("username")} name="username"/>

                <input type="submit" value="Add User"/>
            </form>
            <p className="validation-message"></p>
        </div>
    )
}

export default UserForm;