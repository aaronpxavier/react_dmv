import { GET_HISTORY_SUCCESS, GET_HISTORY_PENDING } from '../../Constants/actionTypes'

export default function historyReducer(state = {}, action) {
    switch (action.type) {
        case GET_HISTORY_SUCCESS:
            return {
                ...state,
                historyData: {
                    historyArray: action.data.value,
                    requestSuccessful: true,
                },
            }
        case GET_HISTORY_PENDING:
            return {
                ...state,
                historyData: {
                    requestPending: true,
                },
            }
        case "HISTORY_MODAL_CHANGE":
            return {
                historyData: {
                    ...state.historyData,
                    openHistoryPopup: action.open,
                    rowData: action.rowData
                }
            }
        default:
            return {
                ...state,
                historyData: {
                    requestPending: true,
                }
            }
    }
}