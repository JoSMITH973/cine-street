import React from 'react';
import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import './App.css';
import Map from './components/pages/Map';
import List from './components/pages/List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

function getIcon(link) {
    let url = process.env.PUBLIC_URL+link
    return url
}

function App() {
  return (
    <div>
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
  );
}

export default App;
