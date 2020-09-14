import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditHistoryRender from './EditHistoryRender'
import * as editHistoryActions from '../../Redux/Actions/editHistoryActions'

const EditHistory = (props) => {
    useEffect(() => {
        props.actions.openHistoryForm(props.match.params.historyId)
    }, [])
    return <EditHistoryRender {...props} />
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(editHistoryActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        historyData: state.editHistoryReducer.historyData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHistory)