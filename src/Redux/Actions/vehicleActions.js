import { dynGetCall, dynDeleteCall } from '../../Utilities/dyanamicsAPI'
import { GET_VEHICLES_SUCCESS, GET_VEHICLES_PENDING, VEHICLE_MODAL_CHANGE, DELETE_VEHICLE_POPUP_CHANGE } from '../../Constants/actionTypes'
import { DYN_BASE_URL } from '../../Constants/config'

export function getVehicles() {
    return (dispatch) => {
        return dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles?$select=_ownerid_value,_teamtwo_contactlookupid_value,teamtwo_make,teamtwo_model,teamtwo_vin,teamtwo_year&$count=true')
            .then((response) => {
                dispatch(getRequestVehicles(response.data))
            })
    }
}

export function getRequestVehicles(data) {
    return {
        type: GET_VEHICLES_SUCCESS,
        data: data
    }
}

export function getRequestVehiclesPending() {
    return {
        type: GET_VEHICLES_PENDING
    }
}

export function openVehicleModal(rowData) {
    return (dispatch) => dispatch(openVehicleModalDispatch(true, rowData))
}

export function closeVehicleModal() {
    return (dispatch) => dispatch(openVehicleModalDispatch(false))
}

export function openVehicleModalDispatch(open, rowData) {
    return {
        type: VEHICLE_MODAL_CHANGE,
        open: open,
        rowData: rowData
    }
}

//delete functionality

export function deleteVehicle(guid) {
    return dispatch => {
        dispatch(changeVehicleDeletePopup(false))
        dispatch(getRequestVehiclesPending())
        return dynDeleteCall(`${DYN_BASE_URL}/api/data/v9.1/teamtwo_vehicles(${guid})`)
            .then(() => dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles?$select=_ownerid_value,_teamtwo_contactlookupid_value,teamtwo_make,teamtwo_model,teamtwo_vin,teamtwo_year&$count=true'))
            .then(response => dispatch(getRequestVehicles(response.data)))
    }

}

export function changeVehicleDeletePopup(open, rowData) {
    return {
        type: DELETE_VEHICLE_POPUP_CHANGE,
        open: open,
        rowData: rowData
    }
}

export function openVehicleDeletePopup(rowData) {
    return dispatch => dispatch(changeVehicleDeletePopup(true, rowData))
}

export function closeVehicleDeletePopup(rowData) {
    return dispatch => dispatch(changeVehicleDeletePopup(false, rowData))
}
