
import { MailPreview } from '../cmps/MailPreview.jsx'
import { MailService } from '../services/mail-service.js'
import { MailFilter } from '../cmps/MailFilter.jsx'
import { EmailStatus } from '../cmps/EmailStatus.jsx'




export class SentList extends React.Component {

    state = {
        mails: [],
        filterBy: '',
        unReadMails: 0,
         
    }


    componentDidMount() {
        this.loadMails()
            ;

    }
    componentWillUnmount() {
        MailService.saveMailsToStorage()
       
    }


    loadMails() {
        MailService.query()
            .then(mails => {
                this.setState({ mails })
            })
    }
    onDeleteMail=(ev,mailId)=>{
        ev.preventDefault()
        MailService.remove(mailId)
        this.loadMails()
        }

        onIsFav=(ev,mail)=>{ 
            ev.stopPropagation()
            ev.preventDefault()
           mail.isFav = (!mail.isFav)? true :false
           MailService.saveMailsToStorage()
           this.loadMails()
            
        }
    
    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    getMailsForDisplay = () => {
        let mails = this.state.mails.filter(mail => mail.isSent === true)
         mails = mails.filter(mail => mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        return mails;
    }

    render() {
        const mailsToShow = this.getMailsForDisplay()
        return (
            <div>
                <i className="fas fa-bars" onClick={this.props.showSide}></i>
                <MailFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <hr/>
                <div className="status"><EmailStatus mails={this.state.mails} /></div>
                <ul>{mailsToShow.map((mail) =>
                    <li key={mail.id} className="preview-line" >
                        < MailPreview key={mail.id} mail={mail} onIsFav={this.onIsFav} onDeleteMail={this.onDeleteMail} />
                    </li>
                )
                }
                </ul>
            </div>

        )




    }
    }