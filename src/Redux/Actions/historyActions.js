import { dynDeleteCall, dynGetCall } from '../../Utilities/dyanamicsAPI'
import { GET_HISTORY_SUCCESS, GET_HISTORY_PENDING, HISTORY_MODAL_CHANGE, DELETE_HISTORY_POPUP_CHANGE } from '../../Constants/actionTypes'

export function getHistory() {
    return (dispatch) => {
        dispatch(getRequestHistoryPending())
        return dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_drivinghistories?$select=_teamtwo_contacttodrivinghistoryid_value,teamtwo_driving_history_number,teamtwo_drivinghistorystate,teamtwo_incidenttype,teamtwo_points,teamtwo_totalconvictionpoints,teamtwo_totalconvictionpoints_date,teamtwo_totalconvictionpoints_state, teamtwo_drivinghistorydescription')
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
        type: HISTORY_MODAL_CHANGE,
        open: open,
        rowData: rowData
    }
}

//delete functionality

export function deleteHistory(guid) {
    return dispatch => {
        dispatch(changeHistoryDeletePopup(false))
        dispatch(getRequestHistoryPending())
        return dynDeleteCall(`https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_drivinghistories(${guid})`)
            .then(() => dynGetCall('https://mdynamic0077.crm.dynamics.com/api/data/v9.1/teamtwo_drivinghistories?$select=_teamtwo_contacttodrivinghistoryid_value,teamtwo_driving_history_number,teamtwo_drivinghistorystate,teamtwo_incidenttype,teamtwo_points,teamtwo_totalconvictionpoints,teamtwo_totalconvictionpoints_date,teamtwo_totalconvictionpoints_state, teamtwo_drivinghistorydescription'))
            .then(response => dispatch(getRequestHistory(response.data)))
    }
}

export function changeHistoryDeletePopup(open, rowData) {
    return {
        type: DELETE_HISTORY_POPUP_CHANGE,
        open: open,
        rowData: rowData
    }
}

export function openHistoryDeletePopup(rowData) {
    return dispatch => dispatch(changeHistoryDeletePopup(true, rowData))
}

export function closeHistoryDeletePopup(rowData) {
    return dispatch => dispatch(changeHistoryDeletePopup(false, rowData))
}
