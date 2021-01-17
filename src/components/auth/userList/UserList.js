import React from 'react';

const UserList = ({ users, setProfileOpen, getUserById, deletUserById }) => {
    const openProfile = e => {
        setProfileOpen(true);
        const id = e.target.dataset.id;
        getUserById(id);
    };

    const deleteUser = e => {
        const id = e.target.dataset.id;
        deletUserById(id);
    };

    return (
        <div>
            <h2>User info</h2>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        style={{
                            fontSize: '16px',
                            margin: '5px',
                            padding: '10px',
                            border: '1px solid #ccc',
                        }}
                    >
                        <span>Email: {user.email}</span>
                        <span>Password: {user.password}</span>
                        <button
                            type="button"
                            className=""
                            data-id={user.id}
                            onClick={openProfile}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className=""
                            data-id={user.id}
                            onClick={deleteUser}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
