import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spinner () {
    return (
    <CircularProgress color="secondary" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
    );
}
