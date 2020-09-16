import React from 'react'
import Spinner from '../Spinner/spinner'
import CustomerTable from './Customers'
import CustomerDelete from './CustomerDelete'
import CustomerModal from './CustomerModal'

export default function customerContainer(props) {

    if (props.contactData.requestPending) {
        return (
            <Spinner></Spinner>
        )
    } else if (props.contactData.openDeletePopup) {
        return (<CustomerDelete {...props} />)
    }
    else if (props.contactData.openCustomerPopup) {
        return (<CustomerModal {...props} />)
    }
    else if (props.contactData.requestSuccessful) {
        return (
            <CustomerTable {...props} />
        )
    }
    return (<div></div>)
}
