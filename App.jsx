const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
import { MailApp } from "./apps/mail/MailApp.jsx";
import { Header } from "./cmps/Header.jsx";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>

          <main>
              <Route component={MailApp} path="/mail/mailList" />

          </main>
        </div>
      </Router>
    );
  }
}
