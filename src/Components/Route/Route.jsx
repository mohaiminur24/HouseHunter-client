import { createBrowserRouter } from "react-router-dom";
import HomePage from "../HomePageLayout.jsx/HomePage";

const route = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    }
]);










export default route;