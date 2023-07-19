import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePageLayout.jsx/HomePage";
import LoginPage from "../UserLoginRegistration/LoginPage";
import RegistrationPage from "../UserLoginRegistration/RegistrationPage";
import HouseRent from "../HouseRentDashboard/HouseRent";
import HouseOwner from "../HouseOwnerDashboard/HouseOwner";
import HouseUpdate from "../HouseUpdateLayout/HouseUpdate";

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
    },
    {
        path:"/houseowner",
        element: <HouseOwner/>
    },
    {
        path:"/houserent",
        element: <HouseRent/>
    },
    {
        path: "/houseupdate/:id",
        element: <HouseUpdate/>
    }
]);










export default route;