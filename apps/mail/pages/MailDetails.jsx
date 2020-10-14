
import { MailService } from '../services/mail-service.js'
export class MailDetails extends React.Component {

    state = {
        mail: null,

    }
    componentDidMount() {
        const mailId = this.props.match.params.mailId
        MailService.getById(mailId)
            .then(mail => this.setState({ mail: mail }))
            
    }
    componentWillUnmount() {
        MailService.saveMailsToStorage()
       
    }
     getClassForStar(mail){
        
        let className=(!mail.isFav)?'fas fa-star':'fas fa-star yellow'
        return className
    }
    onDeleteMail=()=>{
        const mailId = this.props.match.params.mailId
        MailService.remove(mailId)
        this.props.history.push("/mail/mailList")
        
        }
        onIsFav=(ev)=>{ 
            let mail =this.state.mail
            ev.stopPropagation()
            ev.preventDefault()
            mail.isFav = (!mail.isFav)? true :false
            this.setState({ mail: mail })
            
        }

    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading....</div>

        return (


            <div className='mail-details-container'>
                <i className="fas fa-bars" onClick={this.props.showSide}></i>
                
                <hr/>
                <div className="toolbar"><i className={this.getClassForStar(mail)} onClick={ (ev) => this.onIsFav(ev)}></i><i className="far fa-trash-alt garbe" onClick={this.onDeleteMail}></i></div>
                <div className="subject-title"><p>{mail.subject}</p></div>
                <p className="sender-details">From: {mail.sender}</p>
                <div className="sent-time">Sent at: {mail.sentAt}</div>
                <div className="mail-body">{mail.body}</div>
                <button className="ans-btn" onClick={this.props.showModal}>Ans</button>

            </div>

        )
    }
}
