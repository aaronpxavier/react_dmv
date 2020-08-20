import { dynGetCall } from '../../Utilities/dyanamicsAPI'

export function getVehicles() {
    return (dispatch) => {
        return dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_vehicles?$select=_ownerid_value,_teamtwo_contactlookupid_value,teamtwo_make,teamtwo_model,teamtwo_vin,teamtwo_year&$count=true')
            .then((response) => {
                dispatch(getRequestVehicles(response.data))
            })
    }
}

export function getRequestVehicles(vehicles) {
    return {
        type: 'GET_VEHICLES',
        vehicles: vehicles
    }
}