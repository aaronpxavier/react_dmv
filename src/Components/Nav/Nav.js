import React from 'react'

import { Link, withRouter } from 'react-router-dom'

function Nav(props) {
    return (
        <div>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    Activities
                </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/applications' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    Applications
                </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/cardmodal' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    CardModal
                </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/customers' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    Customers
                </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/history' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    History
            </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/newapplication' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    NewApplication
            </Link>
            </span>
            <span style={{ marginLeft: '5px' }}>
                <Link to='/vehicles' style={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                    Vehicles
                </Link>
            </span>
        </div>
    )
}

export default withRouter(Nav)