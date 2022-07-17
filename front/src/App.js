import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/contactus";
import PageTwo from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/contactus">
                    <PageOne />
                </Route>
                <Route path="/about">
                    <PageTwo />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
