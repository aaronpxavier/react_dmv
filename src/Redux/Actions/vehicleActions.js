import { dynGetCall } from '../../Utilities/dyanamicsAPI'
import { GET_VEHICLES_SUCCESS, GET_VEHICLES_PENDING } from '../../Constants/actionTypes'

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
        type: "VEHICLE_MODAL_CHANGE",
        open: open,
        rowData: rowData
    }
}