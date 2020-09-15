import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditVehicleRender from './EditVehicleRender'
import * as editVehicleActions from '../../Redux/Actions/editVehicleActions'

const EditVehicle = (props) => {
    useEffect(() => {
        props.actions.openVehicleForm(props.match.params.vehicleId)
    }, [])
    return <EditVehicleRender {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle)