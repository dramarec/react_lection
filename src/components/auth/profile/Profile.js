import React, { useState } from 'react';

const initialState = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    id: '',
};

const Profile = ({ userById, setProfileOpen, setUsers }) => {
    const [user, setUser] = useState({ ...initialState, ...userById });

    const onHandleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onHandleSubmit = e => {
        e.preventDefault();
        setProfileOpen(false);
        // по умолчанию false???
        setUsers(users => [
            ...users.map(item => (item.id === user.id ? { ...user } : item)),
        ]);
    };

    return (
        <>
            <h2>Profile</h2>
            <form onSubmit={onHandleSubmit}>
                <label>
                    First name:{' '}
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Last name:{' '}
                    <input
                        type="text"
                        name="lastName"
                        value={user.flastName}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Email:{' '}
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Password:{' '}
                    <input
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={onHandleChange}
                    />
                </label>
                <label>
                    Gender:
                    <select
                        name="gender"
                        value={user.gender}
                        onChange={onHandleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default Profile;
