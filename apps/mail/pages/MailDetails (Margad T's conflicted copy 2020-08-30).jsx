
import { MailService } from '../services/mail-service.js'
import { SideMenu } from '../cmps/SideMenu.jsx'
export class MailDetails extends React.Component {

    state = {
        mail: null,

    }
    componentDidMount() {
        const mailId = this.props.match.params.mailId
        MailService.getById(mailId)
            .then(mail => this.setState({ mail: mail }))
    }



    render() {
        const { mail } = this.state
        if (!mail) return <div>Loading....</div>

        return (
            <section>
            
            <div className='mail-details'> 
                <div className="toolbar">toolBar</div>
                <div className="subject-title"><p>{mail.subject}</p></div>
                <p className="sender-details"></p>
                <div className="mail-body">{mail.body}</div>
               
            </div>
            </section>
        )
    }
}