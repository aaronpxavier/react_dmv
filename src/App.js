import React, {Component} from 'react'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import * as Msal from 'msal';
import Axios from 'axios';


export class App extends Component {
    render = () => 
        <div>
            Dmv React Basic
            <Nav />
            {routes}
        </div>
}


export default withRouter(App)