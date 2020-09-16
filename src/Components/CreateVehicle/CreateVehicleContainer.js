import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateVehicleRender from './CreateVehicleRender'
import * as createVehicleActions from '../../Redux/Actions/createVehicleActions'

const CreateVehicle = (props) => {
    useEffect(() => {
        props.actions.openCreateVehicleForm()
    }, [])
    return <CreateVehicleRender {...props} />
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(createVehicleActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        vehicleData: state.createVehicleReducer.vehicleData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)