import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEvent(){

   
    return <EventForm/>;

}

export default NewEvent;

export async function action({request,params}){
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    const response = await fetch('http://localhost:8080/events',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
     if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not save events!" }), { status: 500 });
  } else {
    console.log(response);// Return parsed JSON response
    return redirect('/events');)
  }
}