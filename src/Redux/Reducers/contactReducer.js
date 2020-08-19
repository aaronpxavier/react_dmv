let defaultState = {
    contacts: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "GET_CONTACTS") {
        return {
            ...state,
            contacts: action.contacts
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer