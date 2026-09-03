import type { Components } from '@mui/material/styles';

export const buttonOverrides: Components['MuiButton'] = {
  defaultProps:{
    variant:'contained'
  },
  styleOverrides: {
    root: {
      borderRadius: 8,
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  
};