import React from 'react';
import PropTypes from 'prop-types';
import { getTokenPopup } from '../../Utilities/MsalAuth/msalAuth';
import Spinner from '../Spinner/spinner';
const AuthRender = (props) => {

        if (!props.authData || props.authData.requestPending)
          return (
            <Spinner></Spinner>
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
