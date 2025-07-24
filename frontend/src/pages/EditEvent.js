
import EventForm from "../components/EventForm";
import { useLoaderData} from 'react-router-dom'

function EditEvent(){

    const data = useLoaderData();


    return <>

    <EventForm event={data.event}/>
    
    </>;
    
}

export default EditEvent;