const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { Bapp } from './apps/books/Bapp.jsx'
import { MailApp } from './apps/mail/MailApp.jsx'
import { KeepApp } from './apps/keep/KeepApp.jsx'
import { Home } from './pages/Home.jsx'
import { Navbar } from './cmps/Navbar.jsx'
import { KeepEdit } from './apps/keep/pages/KeepEdit.jsx'
import { KeepDetails } from './apps/keep/pages/KeepDetails.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    {/* <header>
                        <Navbar />

                    </header> */}

                    <main>

                        <Switch>
                        {/* <Route component={KeepEdit} path="/keep/edit/:id?" />
                        <Route component={KeepDetails} path="/keep/:noteId" />
                            <Route component={Bapp} path="/book" />
                            <Route component={KeepApp} path="/keep" />
                        <Route component={KeepApp} path="/keep" /> */}
                            <Route component={MailApp} path="/" />
                            {/* <Route exact component={Home} path="/" /> */}

                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}