import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();

    let title = 'An error occured!';
    let message = 'Something went wrong!'
    if(error.status === 500){
        message = JSON.parse(error.data).message
    }else if (error.status === 404){
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }


    console.log(error.status);

    return <PageContent title="An error occured!">
        <p>Something went wrong!</p>
    </PageContent>;
    
}

export default ErrorPage;