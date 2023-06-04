import { createBrowserRouter } from "react-router-dom";
import NavPage from "../components/nav_component/NavPage";
import Chat from '../components/user_component/chat'
import Contacts from '../components/user_component/contacts'
import Group from '../components/user_component/group'
import Profile from '../components/user_component/profile'
import Settings from '../components/user_component/settings'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <NavPage />
    },
    {
        path: "/",
        element: <Chat />
    },
    {
        path: "/contacts",
        element: <Contacts />
    },
    {
        path: "/group",
        element: <Group />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/settings",
        element: <Settings />
    },
    
]);

export default routes;