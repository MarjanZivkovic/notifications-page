function Header({ totalUnread, markAllAsRead }){
    return (
        <header>
            <h1>Notifications <span className='notes-number'>{totalUnread}</span></h1>
            <button className='mark-read' onClick={markAllAsRead}>Mark all as read</button>
        </header>
    )
}

export default Header;