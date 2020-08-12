import React from 'react'
import routes from './routes'
import { withRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'



function App(props) {
    return (
        <div>
            Dmv React Basic
            <Nav />
            {routes}
        </div>
    )
}

export default withRouter(App)