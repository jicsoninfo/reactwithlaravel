// import React from 'react';
// import LoginForm from '../components/LoginForm';

// const LoginPage = () => {
//     return (
//         <div className="login-page">
//             <h2>Login</h2>
//             <LoginForm />
//         </div>
//     );
// };

// export default LoginPage;


import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Login</h3>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
