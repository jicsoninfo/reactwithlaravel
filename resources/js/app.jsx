// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//     return <h1>Hello your project dfghdf</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';



const root = document.getElementById('root');

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <LoginPage />
        </React.StrictMode>
    );
}

