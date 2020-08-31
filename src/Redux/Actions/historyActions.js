import { dynGetCall } from '../../Utilities/dyanamicsAPI'
import { GET_HISTORY_SUCCESS, GET_HISTORY_PENDING } from '../../Constants/actionTypes'

export function getHistory() {
    return (dispatch) => {
        dispatch(getRequestHistoryPending())
        return dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_drivinghistories?$select=_teamtwo_contacttodrivinghistoryid_value,teamtwo_driving_history_number,teamtwo_drivinghistorystate,teamtwo_incidenttype,teamtwo_points,teamtwo_totalconvictionpoints,teamtwo_totalconvictionpoints_date,teamtwo_totalconvictionpoints_state')
            .then((response) => {
                dispatch(getRequestHistory(response.data))
            })
    }
}

export function getRequestHistory(data) {
    return {
        type: GET_HISTORY_SUCCESS,
        data: data
    }
}

export function getRequestHistoryPending() {
    return {
        type: GET_HISTORY_PENDING,
    }
}

export function openHistoryModal(rowData) {
    return (dispatch) => dispatch(openHistoryModalDispatch(true, rowData))
}

export function closeHistoryModal() {
    return (dispatch) => dispatch(openHistoryModalDispatch(false))
}

export function openHistoryModalDispatch(open, rowData) {
    return {
        type: "HISTORY_MODAL_CHANGE",
        open: open,
        rowData: rowData
    }
}