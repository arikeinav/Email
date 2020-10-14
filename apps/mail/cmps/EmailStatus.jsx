export function EmailStatus ({mails}) {

    
        var unread =0
         mails.forEach(mail => {
             if(!mail.isRead) unread++
             
         });
        return <div><p>{unread} unread </p></div>

    }
  
    
  
