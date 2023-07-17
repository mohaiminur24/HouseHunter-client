import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePageLayout.jsx/HomePage";
import LoginPage from "../UserLoginRegistration/LoginPage";
import RegistrationPage from "../UserLoginRegistration/RegistrationPage";

const route = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path: "/registration",
        element: <RegistrationPage/>
    }
]);










export default route;