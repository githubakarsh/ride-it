import { CommentComponent } from "../components/CommentComponent";
import { CreateRide } from "../components/CreateRide";
import { LikeComponent } from "../components/LikeComponent";


export const Rides = () => {
    return <>
        <div><CreateRide /></div>
        <div><LikeComponent/></div>
        <div><CommentComponent /></div>
    </>;
};