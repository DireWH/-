import { useRoutes } from "react-router-dom";
import Friend from "../pages/friend/Friend";
import Content from "../pages/main/Content";
import Mine from "../pages/mine/Mine";
export default function GetRoutes() {

    const routes = useRoutes([
        {
            path: '/discover',
            element: <Content />,
            children: [{
                path: 'toplist',
                element: <Content />,

            }, {
                path: 'playlist',
                element: <Content />,

            }, {
                path: 'djradio',
                element: <Content />,

            }, {
                path: 'artist',
                element: <Content />,

            }, {
                path: 'album',
                element: <Content />,

            },]
        },
        {
            path: '/',
            element: <Content />
        },
        {
            path: '/mine',
            element: <Mine />
        },
        {
            path: '/friend',
            element: <Friend />
        },
    ])
    return routes
}
