import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditContactRender from './EditContactRender'
import * as editContactActions from '../../Redux/Actions/editContactActions'

const EditContact = (props) => {
    useEffect(() => {
        props.actions.openContactForm(props.match.params.customerId)
    }, [])
    return <EditContactRender {...props} />
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(editContactActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        contactData: state.editContactReducer.contactData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContact)
