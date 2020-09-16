export default function createVehicleReducer(state = {}, action) {
    switch (action.type) {
        case 'POST_VEHICLE_SUCCESS':
            return {
                ...state,
                vehicleData: {
                    requestSuccessful: true
                }
            }
        case 'POST_VEHICLE_PENDING':
            return {
                ...state,
                vehicleData: {
                    requestPending: true
                }
            }
        case 'POST_VEHICLE_FORM_VIEW':
            return {
                ...state,
                vehicleData: {
                    postVehicle: true,
                    contact: action.contact,
                    make: action.make,
                    model: action.model,
                    vin: action.vin,
                    year: action.year
                }
            }
    }
}