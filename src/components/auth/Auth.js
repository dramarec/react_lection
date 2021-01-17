import React, { useState } from 'react';
import AuthForm from './authForm/AuthForm';
import Profile from './profile/Profile';
import UserList from './userList/UserList';

const Auth = () => {
    const [users, setUsers] = useState([]);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [user, setUser] = useState({});

    const getUserById = id => {
        const userById = users.find(user => user.id === id);
        setUser({ ...userById });
    };
    const deletUserById = id => {
        setUsers([...users.filter(user => user.id !== id)]);
    };

    return (
        <>
            <AuthForm setUsers={setUsers} />
            {users.length > 0 && (
                <UserList
                    users={users}
                    setProfileOpen={setProfileOpen}
                    getUserById={getUserById}
                    deletUserById={deletUserById}
                />
            )}
            {isProfileOpen && (
                <Profile
                    setProfileOpen={setProfileOpen}
                    userById={user}
                    setUsers={setUsers}
                />
            )}
        </>
    );
};

export default Auth;
//=====
//
//
// import React, { Component } from 'react';
// import AuthForm from './authForm/AuthForm';

// export default class Auth extends Component {
//     const [users,setUsers] = useState([]);

//     render() {
//         return (
//             <>
//                 <AuthForm />
//             </>
//         );
//     }
// }
