import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const tableStyles = makeStyles((theme) => ({
    
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(224, 224, 224, 1)',
        },
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        }
    },

    tableBody: {
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 12,
        }, 
    }
  }));
