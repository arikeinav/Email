const { Route, Switch } = ReactRouterDOM;
import { MailService } from "./services/mail-service.js";
import { MailList } from "./pages/MailList.jsx";
import { SideMenu } from "./cmps/SideMenu.jsx";
import { Modal } from "./cmps/Modal.jsx";
import { MailDetails } from "./pages/MailDetails.jsx";
import { SentList } from "./pages/SentList.jsx";
import { FavMail } from "./pages/FavMail.jsx";
import { EmailCompose } from "./cmps/EmailCompose.jsx";

export class MailApp extends React.Component {
  state = {
    modalShow: false,
    sideBarShow: false,
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails() {
    MailService.query().then((mails) => {
      this.setState({ mails });
    });
  }

  showModal = () => {
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ modalShow: false });
  };
  showSide = () => {
    this.setState({ sideBarShow: true });
  };

  hideSide = () => {
    this.setState({ sideBarShow: false });
  };

  render() {
    return (
      <div>
        <section className="mail-app">
          <div className={`side-menu ${this.state.sideBarShow ? "shown" : ""}`}>
            <img className="logo" src="apps\mail\assets\img\logo.png" alt="" />
            <hr />
            <SideMenu hideSide={this.hideSide} showModal={this.showModal} />
          </div>
          <div className="mails-container">
            <Switch>
              <Route
                render={(props) => (
                  <SentList {...props} showSide={this.showSide} />
                )}
                path="/mail/mailList/sent"
              />
              <Route
                render={(props) => (
                  <FavMail {...props} showSide={this.showSide} />
                )}
                path="/mail/mailList/fav"
              />
              <Route
                render={(props) => (
                  <MailDetails
                    {...props}
                    showSide={this.showSide}
                    showModal={this.showModal}
                  />
                )}
                path="/mail/mailList/:mailId"
              />
              <Route
                render={(props) => (
                  <MailList {...props} showSide={this.showSide} />
                )}
                path="/mail/mailList"
              />
            </Switch>

            <Modal
              show={this.state.modalShow}
              onClose={this.hideModal}
              children={<EmailCompose onClose={this.hideModal} />}
            />
          </div>
        </section>
      </div>
    );
  }
}
