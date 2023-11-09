import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import AddBlog from "../components/AddBlog/AddBlog";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addblog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/blogdetails',
                element: <BlogDetails></BlogDetails>
            }
        ]
    },
]);

export default router
