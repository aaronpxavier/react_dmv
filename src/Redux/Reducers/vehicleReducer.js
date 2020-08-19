let defaultState = {
    vehicles: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "GET_VEHICLES") {
        return {
            ...state,
            vehicles: action.vehicles
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer