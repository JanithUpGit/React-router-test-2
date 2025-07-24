import EventsNavigation from "../components/EventsNavigation";
import EventsPage from "./EventsPage";
import { Outlet } from "react-router-dom";


function EventsRootLayout(){

    return<>

        <EventsNavigation/>
        <Outlet/>
    
    
    </>
}

export default EventsRootLayout;