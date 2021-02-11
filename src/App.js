import React from 'react';
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import './App.css';

import Map from './pages/Home';
import ListMode from './pages/listMode';
import ViewAllFilms from './pages/viewAllFilms';
import List from './pages/List';

import Login from './login/Login';
import Register from './login/Register';
import ForgetPassword from './login/forgetPassword';
import SingleFilmPage from './login/singleFilmPage';
import Account from './login/account';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

function getIcon(link) {
    let url = process.env.PUBLIC_URL+link
    return url
}

function App() {
    let jwt = 'pas ok';
    if (jwt=='ok') {
        return (
            <div>
                {/* Model pour Map et List */}
                <BrowserRouter>
                    <Link key="Map" to="/" >
                        <FontAwesomeIcon className="MapIcon" icon={faMapMarkedAlt} />
                    </Link>
                    <Link key="List" to="/List" >
                        <FontAwesomeIcon className="ListIcon" icon={faSearch} />
                    </Link>
                    <Switch>
                        <Route exact path="/" component={Map} />
                        <Route path="/List" component={List} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
    else {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/viewAllFilms">
                            <ViewAllFilms/>
                        </Route>
                        <Route path="/listMode">
                            <ListMode/>
                        </Route>
                        <Route path="/map">
                            <Map/>
                        </Route>
                        <Route path="/account">
                            <Account/>
                        </Route>
                        <Route path="/singleFilmPage">
                            <SingleFilmPage/>
                        </Route>
                        <Route path="/forgetPassword">
                            <ForgetPassword/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/">
                            <Login/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
