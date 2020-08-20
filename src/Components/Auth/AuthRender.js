import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getTokenPopup } from '../../Utilities/MsalAuth/msalAuth';

const AuthRender = (props) => {

        if (!props.authData || props.authData.requestPending)
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          }}>
              <CircularProgress color="secondary" />
            </div>
          );
        else if(props.authData.requestSucessful) {
          props.history.push('/');
        } else if (props.authData.tokenAuthFailed) {
          getTokenPopup();
        }
            
        return (<div>Not working</div>);

}
AuthRender.propTypes = {
  authData: PropTypes.object
};

export default AuthRender;
