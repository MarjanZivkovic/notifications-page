import { useState } from 'react';
import { data } from './data/data';
import angela from './assets/avatar-angela-gray.webp';
import anna from './assets/avatar-anna-kim.webp';
import jacob from './assets/avatar-jacob-thompson.webp';
import kimberly from './assets/avatar-kimberly-smith.webp';
import mark from './assets/avatar-mark-webber.webp';
import nathan from './assets/avatar-nathan-peterson.webp';
import rizky from './assets/avatar-rizky-hasanuddin.webp';
import Notifications from './components/Notifications';
import Header from './components/Header';


function getAvatar(avatar){
  switch (avatar){
    case 1:
      return mark;
    case 2:
      return angela;
    case 3:
      return jacob; 
    case 4:
      return rizky;
    case 5:
      return kimberly;
    case 6:
      return nathan;
    case 7:
      return anna;
    default:
      return null;              
  }
}

function App() {
  const [ read, setRead ] = useState(data);

  function markRead(id){
    setRead( prevRead => prevRead.map( user => {
      if(user.id === id){
        return {
          ...user, read: !user.read
        }
      }
      return user;
    }))
  }

  function markAllAsRead(){
    setRead( prevRead => prevRead.map( user => {
        return {
          ...user, read: true
        }
    }))
  }

  const totalUnread = read.reduce( ( total, user ) =>{
    return total + ( !user.read ? 1 : 0 );
  }, 0)


  return (
    <div className="App">
      <Header markAllAsRead={markAllAsRead} totalUnread={totalUnread}/>
      <Notifications  read={read} getAvatar={getAvatar} markRead={markRead}/>
    </div>
  );
}

export default App;
