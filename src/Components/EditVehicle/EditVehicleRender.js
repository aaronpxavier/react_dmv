import React from 'react'
import Spinner from '../Spinner/spinner'
import EditVehicle from './EditVehicle'

export default function EditVehicleRender(props) {
    if (props.vehicleData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (props.vehicleData.editVehicle) {
        return (<EditVehicle {...props} />)
    } else if (props.vehicleData.requestSuccessful) {
        props.history.push('/vehicles')
    }
    return (<h1>I failed</h1>)
}