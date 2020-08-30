import React from 'react';
import Spinner  from '../Spinner/spinner';
import ApplicationDeleteDialog from './ApplicationDeleteDialog';
import ApplicationTable from './ApplicationTable';
import EditApplication from './EditApplication';


export default function ApplicationRender(props) {
    console.log(props)
    let { applicationData } = props;
    if (applicationData.requestPending) {
        return (<Spinner></Spinner>)
    } else if(applicationData.openDeletePopup) {
        return (<ApplicationDeleteDialog {...props}/>);
    }else if (applicationData.requestSuccessful) {
        return <ApplicationTable {...props}></ApplicationTable>
    }else if (applicationData.editApplication) {
        return <EditApplication {...props}></EditApplication>
    }
    return (<div></div>)
}
