import { useRoutes } from "react-router-dom";
import Friend from "../pages/friend/Friend";
import Content from "../pages/main/Content";
import Mine from "../pages/mine/Mine";
export default function GetRoutes() {

    const routes = useRoutes([
        {
            path: '/',
            element: <Content/>
        },
        {
            path: '/mine',
            element: <Mine/>
        },
        {
            path: '/friend',
            element: <Friend/>
        },
    ])
    return routes
}
