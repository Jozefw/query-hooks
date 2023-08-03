import {Outlet} from "react-router-dom";
import ManiNavigation from "./ManiNavigation";

function Root(){
    return(
        <>      
        <ManiNavigation></ManiNavigation>
        <Outlet></Outlet>
        </>
    )
}

export default Root;