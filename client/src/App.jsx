import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, Route, createRoutesFromElements,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import "./style.scss";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

// The below router is configured using PLAIN OBJECTS
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/post/:id",
                element: <Single />,
            },
            {
                path: "/write",
                element: <Write />,
            },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

// The below router is configured using JSX
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="post/:id" element={<Single />} />
//                 <Route path="write" element={<Write />} />
//             </Route>
//             <Route path="register" element={<Register />} />
//             <Route path="login" element={<Login />} />
//         </>
//     )
// )

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App