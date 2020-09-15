import { EDIT_VEHICLE_FORM_VIEW, EDIT_VEHICLE_REQUEST_PENDING, EDIT_VEHICLE_REQUEST_SUCCESS, CONTACT_FIELD_CHANGE, MAKE_FIELD_CHANGE, MODEL_FIELD_CHANGE, VIN_FIELD_CHANGE, YEAR_FIELD_CHANGE, VEHICLE_CONTACT_CHANGE } from '../../Constants/actionTypes'

export default function editVehiclesReducer(state = {}, action) {
    switch (action.type) {
        case EDIT_VEHICLE_REQUEST_SUCCESS:
            return {
                ...state,
                vehicleData: {
                    requestSuccessful: true
                }
            }
        case EDIT_VEHICLE_REQUEST_PENDING:
            return {
                ...state,
                vehicleData: {
                    requestPending: true
                }
            }
        case EDIT_VEHICLE_FORM_VIEW:
            return {
                ...state,
                vehicleData: {
                    editVehicle: true,
                    dynUser: action.userData,
                    contact: action.contact,
                    data: action.vehicleData,
                    make: action.make,
                    model: action.model,
                    vin: action.vin,
                    year: action.year
                }
            }
        case CONTACT_FIELD_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    contact: action.contact
                }
            }
        case MAKE_FIELD_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    make: action.make
                }
            }
        case MODEL_FIELD_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    model: action.model
                }
            }
        case VIN_FIELD_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    vin: action.vin
                }
            }
        case YEAR_FIELD_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    year: action.year
                }
            }
        case VEHICLE_CONTACT_CHANGE:
            return {
                ...state,
                vehicleData: {
                    ...state.vehicleData,
                    contact: action.contact.fullname === undefined ? state.vehicleData.contact : action.contact,
                    contacts: action.contacts
                }
            }
        default:
            return {
                ...state,
                vehicleData: {
                    requestPending: true
                }
            }
    }
}
