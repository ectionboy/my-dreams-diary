import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../redux/auth/authThunk';
import { nameSelector } from '../../redux/selectors';

const UserMenu = () => {
    const name = useSelector(nameSelector);

    const dispatch = useDispatch();

    const exit = () => {
      dispatch(logOutThunk());
    };

    const handleButton = () => {
        exit();
      };
  return (
<Box
          component="div"
          sx={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}
        >
          <Typography variant="body2">Hi, {name ?? ''}</Typography>
          <Button
            sx={{ padding: '0px', textTransform: 'none' }}
            variant="outlined"
            onClick={handleButton}
            type="button"
            size="small"
          >
            Logout
          </Button>
        </Box>  )
}

export default UserMenu