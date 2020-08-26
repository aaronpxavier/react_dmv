import { GET_VEHICLES_SUCCESS, GET_VEHICLES_PENDING } from '../../Constants/actionTypes'

export default function vehicleReducer(state = {}, action) {
    switch (action.type) {
        case GET_VEHICLES_SUCCESS:
            return {
                ...state,
                vehiclesData: {
                    vehicleArray: action.data.value,
                    requestSuccessful: true,
                }
            };
        case GET_VEHICLES_PENDING:
            return {
                ...state,
                vehiclesData: {
                    requestPending: true,
                }
            };
        case "VEHICLE_MODAL_CHANGE":
            return {
                vehiclesData: {
                    ...state.vehiclesData,
                    openVehiclePopup: action.open,
                    rowData: action.rowData
                }
            }
        default:
            return {
                ...state,
                vehiclesData: {
                    requestPending: true
                }
            };
    }
}