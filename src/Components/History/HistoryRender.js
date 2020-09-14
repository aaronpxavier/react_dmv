import React from 'react';
import Spinner from '../Spinner/spinner';
import HistoryTable from './History'
import HistoryDelete from './HistoryDelete'
import HistoryModal from './HistoryModal'

export default function historyContainer(props) {
    if (props.historyData.requestPending) {
        return (
            <Spinner></Spinner>
        )
    }
    else if (props.historyData.openDeletePopup) {
        return (<HistoryDelete {...props} />)
    }
    else if (props.historyData.openHistoryPopup) {
        return (<HistoryModal {...props} />)
    }
    else if (props.historyData.requestSuccessful) {
        return (<HistoryTable {...props} />)
    }
    return (<div></div>)
}