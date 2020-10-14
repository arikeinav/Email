const { NavLink } = ReactRouterDOM
const { Link } = ReactRouterDOM
import { LongText } from './LongText.jsx';

export function MailPreview({ mail }) {
    function getClassForRead(){

        return (mail.isRead)? 'mail-prev read-mail-prev':'mail-prev'
    }

    function onIsRead(){
        mail.isRead = true
        
    }
    function onIsFav(){
        
        mail.isFav=true
        console.log(mail);
    }

    

    
    return <Link key={mail.id} to={`/mail/mailList/${mail.id}`}><section className={getClassForRead()} onClick={onIsRead}>
    
    <div className="favorite-mark" ><i className="far fa-star" onClick={onIsFav}></i></div>  
     <div className="sender-name" >sender</div>  
     <div className="subject-txt" >{mail.subject}</div> 
     <LongText text={mail.body} /> 
     <div className="date sent" ><i className="far fa-trash-alt"></i></div>  
     </section></Link>
}