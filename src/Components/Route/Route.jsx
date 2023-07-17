import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePageLayout.jsx/HomePage";
import LoginPage from "../UserLoginRegistration/LoginPage";

const route = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/login",
        element: <LoginPage/>
    }
]);










export default route;