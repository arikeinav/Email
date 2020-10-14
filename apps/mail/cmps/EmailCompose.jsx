import { MailService } from '../services/mail-service.js'

export class EmailCompose extends React.Component {
    state = {
        mail: {
            sendTo:'',
            subject: '',
            body: ''
        }
    }

    elInput = React.createRef()

    componentDidMount() {
        
        this.elInput.current.focus()
        
    }
    onInputChange = (ev) => {
        this.setState(
            {
                mail: { ...this.state.mail, [ev.target.name]: ev.target.value }
            }
        )
    }

    sendMail = (ev) => {
        ev.preventDefault();
        MailService.createMail(this.state.mail)
        // eventBus.emit('notify', { msg: 'Pet Saved', type: 'fail' })
        this.state.mail.subject=''
        this.state.mail.body=''
          this.props.onClose()
                
    }

    render() {
        return (
            
                <form className="compose-form" onSubmit={this.sendMail}>
                <div className="form-header">   <h4>New massage</h4><i className="fas fa-times" onClick= {this.props.onClose}></i></div> 
                <div className="to-input"> <p>To:</p> <input ref={this.elInput} name="sendTo" value={this.state.mail.sendTo}
                        placeholder="" type="text"
                        onChange={this.onInputChange}
                    /></div>
                 <div className="subject-input"><p>Subject:</p><input ref={this.elInput} name="subject" value={this.state.mail.subject}
                        placeholder="" type="text"
                        onChange={this.onInputChange}
                    /></div>

                   <div> <textarea  name="body" id="comp"  value={this.state.mail.body} placeholder="your mail..." onChange={this.onInputChange}></textarea></div>
                    <button className="send-btn">Send</button>
                </form>
            

        )
    }
}

