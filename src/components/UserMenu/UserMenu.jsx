import { Avatar, Box, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
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
          sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Typography variant="body2">Hi, {name ?? ''}</Typography>
          <Avatar
        sx={{ bgcolor: "#092ff3" }}
        alt="avatar"
        src="/broken-image.jpg"
      >
{typeof name === "string" ? name.trimStart().slice(0, 1).toUpperCase() : "A"} 

  </Avatar>
          <Button
            sx={{ padding: '2px', textTransform: 'none', minWidth: "24px" }}
            variant="outlined"
            onClick={handleButton}
            type="button"
            size="small"
          >
            <LogoutIcon>
</LogoutIcon>
          </Button>
        </Box>  )
}

export default UserMenu