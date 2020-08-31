import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Customers from './Customers'
import * as contactActionCreators from '../../Redux/Actions/contactActions'

const Contacts = (props) => {
    useEffect(() => {

        props.actions.getContacts();

    }, [])
    return <Customers {...props}></Customers>
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActionCreators, dispatch),
    }
}

function mapStateToProps(state) {
    return {
        contactData: state.contactReducer.contactsData,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contacts)