const { Link } = ReactRouterDOM
export function SideMenu({showModal,hideSide}) {

    function compose(){
        showModal()
        hideSide()
        
    }
    return (
        <ul className="side-menu-list ">
        <li ><button onClick={compose}>Compose</button></li>
        <Link  to='/mail/mailList'><li onClick={hideSide}>Inbox</li></Link>
        <Link  to='/mail/mailList/fav'><li onClick={hideSide} >Favorites</li></Link>
        <Link  to='/mail/mailList/sent'><li onClick={hideSide}>Sent</li></Link>
       </ul>
    )
    
}


