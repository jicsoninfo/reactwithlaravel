// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function App() {
//     return <h1>Hello your project dfghdf</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import LoginPage from './pages/LoginPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/app.css';



// const root = document.getElementById('root');

// if (root) {
//     ReactDOM.createRoot(root).render(
//         <React.StrictMode>
//             <LoginPage />
//         </React.StrictMode>
//     );
// }


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// // resources/js/app.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';
// import BlogsPage from './pages/BlogsPage';
// import RegisterPage from './pages/RegisterPage';

// function App() {
//     return (
//         <BrowserRouter>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/blogs" element={<BlogsPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// const root = document.getElementById('root');

// if (root) {
//     ReactDOM.createRoot(root).render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// }



// ✅ 3. Create missing pages (if not yet)
// You already have LoginPage, just add placeholders for the rest:

// resources/js/pages/HomePage.jsx
// jsx
// Copy
// Edit
// import React from 'react';

// export default function HomePage() {
//     return <div className="container mt-5"><h2>Home Page</h2></div>;
// }
// resources/js/pages/BlogsPage.jsx
// jsx
// Copy
// Edit
// import React from 'react';

// export default function BlogsPage() {
//     return <div className="container mt-5"><h2>Blogs Page</h2></div>;
// }
// resources/js/pages/RegisterPage.jsx
// jsx
// Copy
// Edit
// import React from 'react';

// export default function RegisterPage() {
//     return <div className="container mt-5"><h2>Register Page</h2></div>;
// }
