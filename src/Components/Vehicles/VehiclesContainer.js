import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VehiclesComp from './Vehicles'
import * as vehicleActionCreators from '../../Redux/Actions/vehicleActions'

const Vehicles = (props) => {
    useEffect(() => {
        console.log(props)
        props.actions.getVehicles();
    }, [])
    return <VehiclesComp {...props}></VehiclesComp>
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