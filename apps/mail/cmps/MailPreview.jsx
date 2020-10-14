
const { Link } = ReactRouterDOM
import { LongText } from './LongText.jsx';

export function MailPreview({ mail,onDeleteMail,onIsFav }) {
    function getClassForRead(){

        return (mail.isRead)? 'mail-prev read-mail-prev':'mail-prev'
    }

    function onIsRead(){
        mail.isRead = true
        
    }
    function getClassForStar(){
        let className=(!mail.isFav)?'fas fa-star':'fas fa-star yellow'
        return className
    }


    
   
    

    

    
    return <Link key={mail.id} to={`/mail/mailList/${mail.id}`}><section className={getClassForRead()} onClick={onIsRead}>
    
    <div className="favorite-mark"  ><i className={getClassForStar()} onClick={ (ev) => onIsFav(ev,mail)}></i><p>{mail.sender}</p></div>  
    
     <LongText subject={mail.subject} text={mail.body} />
    
     <div className="data-sent" ><i className="far fa-trash-alt garbe" onClick={ (ev) => onDeleteMail(ev,mail.id)}></i><p>{mail.sentAt}</p></div>  
     {/* <div className="subject-txt" >{mail.sentAt}</div> */}
     </section></Link>
}