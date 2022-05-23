function buildUser(user: { [field: string]: any }) {
    return (
        <div key={user.id}>
            <p>username: {user.username}</p>
            <p>name: {user.name}</p>
            <p>public_repos: {user.public_repos}</p>
            <p>public_gists: {user.public_gists}</p>
            <p>followers: {user.followers}</p>
            <p>following: {user.following}</p>
            <p>created_at: {user.created_at}</p>
        </div>
    )
}

function mapAllUsers(users: { [field: string]: any }[]) {
    return (
        <div>
            {users.map(buildUser)}
        </div>
    )
}

export default mapAllUsers;