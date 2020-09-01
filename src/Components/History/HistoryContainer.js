import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import History from './History'
import * as historyActionCreators from '../../Redux/Actions/historyActions'

const HistoryRender = (props) => {
    useEffect(() => {
        props.actions.getHistory()
    }, [])
    return <History {...props}></History>
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(historyActionCreators, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        historyData: state.historyReducer.historyData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryRender)