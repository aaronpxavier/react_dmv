import React from 'react'
import Spinner from '../Spinner/spinner'
import EditHistory from './EditHistory'

export default function EditHistoryRender(props) {
    if (props.historyData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (props.historyData.editHistory) {
        return (<EditHistory {...props} />)
    } else if (props.historyData.requestSuccessful) {
        props.history.push('/history')
    }
    return (<h1>I failed</h1>)
}