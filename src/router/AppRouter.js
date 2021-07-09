import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom"
import { Background } from "../components/Background/Background"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { LandingPage } from "../pages/LandingPage"
import { ResumePage } from "../pages/ResumePage"

export const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Background />
            <Switch>
                <Route exact path="/resume" component={ResumePage} />
                <Route exact path="/" component={LandingPage} />

                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    )
}
