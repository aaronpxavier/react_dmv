import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VehiclesRender from './VehicleRender'
import * as vehicleActionCreators from '../../Redux/Actions/vehicleActions'

const Vehicles = (props) => {
    useEffect(() => {
        props.actions.getVehicles();
    }, [])
    return <VehiclesRender {...props} />
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(vehicleActionCreators, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        vehicleData: state.vehicleReducer.vehiclesData,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles)
