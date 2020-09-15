import React from 'react'
import Spinner from '../Spinner/spinner'
import EditContact from './EditContact'

export default function EditContactRender(props) {
    if (props.contactData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (props.contactData.editContact) {
        return (<EditContact {...props} />)
    } else if (props.contactData.requestSuccessful) {
        props.history.push('/customers')
    }
    return (<h1>I messed something up</h1>)
}
