import React from 'react'
import Spinner from '../Spinner/spinner'
import CreateVehicle from './CreateVehicle'

export default function CreateVehicleRender(props) {
    if (props.vehicleData.requestPending) {
        return (<Spinner></Spinner>)
    } else if (props.vehicleData.createVehicle) {
        return (<CreateVehicle {...props} />)
    } else if (props.vehicleData.requestSuccessful) {
        props.history.push('/vehicles')
    }
    return (<h1>I failed</h1>)
}
