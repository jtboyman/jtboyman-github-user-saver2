import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

//this page contains both components; this app only requires one page but may be scaled to include more if necessary

const Home = () => {
    return (
        <div>
            <UserForm />
            <UserList />
        </div>
    )
}

export default Home;