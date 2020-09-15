import React from 'react';
import Spinner from '../Spinner/spinner';
import VehicleTable from './Vehicles'
import VehicleDelete from './VehicleDelete'
import VehicleModal from './VehicleModal'

export default function VehiclesRender(props) {
    if (props.vehicleData.requestPending) {
        return (<Spinner></Spinner>)
    }
    else if (props.vehicleData.openDeletePopup) {
        return (<VehicleDelete {...props} />)
    }
    else if (props.vehicleData.openVehiclePopup) {
        return (<VehicleModal {...props} />)
    }
    else if (props.vehicleData.requestSuccessful) {
        return (<VehicleTable {...props} />)
    }
    return (<div></div>)
}
