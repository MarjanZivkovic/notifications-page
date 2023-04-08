import chess from '../assets/image-chess.webp';


function Notification({user, getAvatar, markRead}){
    return (
          <li key={user.id} className={ !user.read ? 'notification-container unread' : 'notification-container'} onClick={() => markRead(user.id)}>
              <div className="avatar">
                <img src={getAvatar(user.id)} alt="user-avatar" />
              </div>
              <div className="notification">
                <span className='fake-link user-name'>{user.name}</span> 
                &nbsp; {user.event}
                { user.link && <span className={ user.chessLink ? 'fake-link user-link chess-link' : 'fake-link user-link' }>{user.link}</span>}
                {!user.read && <span className='dot'>&nbsp;</span>}
                <div className="time">{user.time}</div>
                { user.message && <div className="message">{user.message}</div>}
              </div>
              <div className="picture">
                {user.picture && <img src={chess} alt='chess'/>}
              </div>
          </li>
    )
}

export default Notification;