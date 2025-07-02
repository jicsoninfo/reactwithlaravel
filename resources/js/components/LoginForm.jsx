// import React, { useState } from 'react';

// const LoginForm = () => {
//     const [form, setForm] = useState({ email: '', password: '' });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // TODO: send to backend
//         console.log('Logging in with:', form);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="login-form">
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={form.password}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;



import React, { useState } from 'react';

//import axios from 'axios';

const LoginForm = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Logging in with:', form);
    //     // You can send data to Laravel here
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //const res = await fetch('localhost/reactlaravel/public/login', {
              const res = await fetch('http://localhost/reactlaravel/public/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                alert('Login successful');
            } else {
                const error = await res.json();
                alert('Login failed: ' + error.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

   

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await axios.post('/login', form, {
    //             headers: {
    //                 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
    //             },
    //         });

    //         alert('Login successful!');
    //     } catch (err) {
    //         alert('Login failed: ' + err.response?.data?.message);
    //     }
    // };



    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
