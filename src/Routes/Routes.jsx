import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/Root/Root";
import AddBlog from "../components/AddBlog/AddBlog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Registration from "../components/Registration/Registration";

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
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/registraion',
                element: <Registration></Registration>
            }
        ]
    },
]);

export default router
