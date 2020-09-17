import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreateVehicleRender from './CreateVehicleRender'
import * as editVehicleActions from '../../Redux/Actions/editVehicleActions'

const CreateVehicle = (props) => {
    useEffect(() => {
        props.actions.openCreateVehicleForm()
    }, [])
    return <CreateVehicleRender {...props} />
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(editVehicleActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        vehicleData: state.editVehiclesReducer.vehicleData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVehicle)