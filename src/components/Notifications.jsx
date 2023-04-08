import Notification from "./Notification";

function Notifications({read, getAvatar, markRead}){
    return (
        <ul>
            {read.map( user =>(
                <Notification  key={user.id} user={user} getAvatar={getAvatar} markRead={markRead}/>
            ))}
        </ul>
    )
}

export default Notifications;