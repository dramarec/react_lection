import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    email: '',
    password: '',
};

const AuthForm = ({ setUsers }) => {
    //
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    //
    const [state, setState] = useState({ ...initialState });

    const onHandleChange = e => {
        const { value, name } = e.target;
        //
        // name === 'email' && setEmail(value);
        // name === 'password' && setPassword(value);
        //
        setState({ ...state, [name]: value });
    };
    const onHandleSubmit = e => {
        const { email, password } = state;
        e.preventDefault();
        // console.log({ email, password });
        setUsers(prev => [...prev, { email, password, id: uuidv4() }]);
        setState({ ...initialState });
    };

    return (
        <form onSubmit={onHandleSubmit}>
            <label>
                Email:
                <input
                    type="text"
                    value={state.email}
                    name="email"
                    onChange={onHandleChange}
                    // onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="text"
                    value={state.password}
                    name="password"
                    onChange={onHandleChange}
                    // onChange={e => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Sign up</button>
        </form>
    );
};
export default AuthForm;

// on hooks
// import React, { Component } from 'react';

// export default class AuthForm extends Component {
//     state = {
//         email: '',
//         password: '',
//     };
//     onHandleChange = e => {
//         const { value, name } = e.target;
//         this.setState({ [name]: value });
//     };
//     onHandleSubmit = e => {
//         e.preventDefault();
//         const { email, password } = this.state;
//         console.log({ email, password });
//     };

//     render() {
//         return (
//             <form onSubmit={this.onHandleSubmit}>
//                 <label>
//                     Email:
//                     <input
//                         type="text"
//                         value={this.state.email}
//                         name="email"
//                         onChange={this.onHandleChange}
//                     />
//                 </label>
//                 <label>
//                     Password:
//                     <input
//                         type="text"
//                         value={this.state.password}
//                         name="password"
//                         onChange={this.onHandleChange}
//                     />
//                 </label>
//                 <button type="submit">Sign up</button>
//             </form>
//         );
//     }
// }
