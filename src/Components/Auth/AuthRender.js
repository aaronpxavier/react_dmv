import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const AuthRender = (props) => {

        if (!props.authData || props.authData.requestPending)
          return (
            <div>
              <CircularProgress color="secondary" />
            </div>
          );
        else if(props.authData.requestSucessful) {
          props.history.push('/');
        }
            
        return (<div>Not working</div>);

}
AuthRender.propTypes = {
  authData: PropTypes.object
};

export default AuthRender;