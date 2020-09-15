import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HistoryRender from './HistoryRender'
import * as historyActionCreators from '../../Redux/Actions/historyActions'

const History = (props) => {
    useEffect(() => {
        props.actions.getHistory()
    }, [])
    return <HistoryRender {...props}></HistoryRender>
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

export default connect(mapStateToProps, mapDispatchToProps)(History)
